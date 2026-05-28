'use strict';
const bcrypt  = require('bcryptjs');
const jwt     = require('jsonwebtoken');
const { v4: uuid } = require('uuid');
const authCfg = require('../config/auth');
const { hashIndex, decrypt } = require('../config/crypto');
const UserRepo  = require('../repositories/UserRepository');
const AuditRepo = require('../repositories/AuditRepository');

class AuthService {
  /**
   * Authenticate user by CPF + password.
   * Returns { accessToken, refreshToken, user } or throws.
   */
  async login({ cpf, password, ip, userAgent }) {
    if (!cpf || !password) throw new Error('CPF e senha são obrigatórios.');

    const cpfHash = hashIndex(cpf);
    const user = UserRepo.findByCpfHash(cpfHash);

    if (!user) {
      // Security: same delay even for non-existent users (prevents timing attacks)
      await bcrypt.hash('dummy', 12);
      throw new Error('Credenciais inválidas.');
    }

    if (!user.is_active) throw new Error('Usuário inativo. Contate o administrador.');

    const passwordMatch = await bcrypt.compare(password, user.password_hash);
    if (!passwordMatch) {
      AuditRepo.log({ userId: user.id, action: 'LOGIN_FAILED', resource: 'users', resourceId: user.id, ip, userAgent });
      throw new Error('Credenciais inválidas.');
    }

    const payload = { sub: user.id, role: user.role, name: user.name };

    const accessToken  = jwt.sign(payload, authCfg.accessSecret,  { expiresIn: authCfg.accessExpires });
    const refreshToken = jwt.sign({ sub: user.id }, authCfg.refreshSecret, { expiresIn: authCfg.refreshExpires });

    // Armazena HASH do refresh token (não o token em si)
    const refreshHash = await bcrypt.hash(refreshToken, 10);
    UserRepo.updateRefreshToken(user.id, refreshHash);
    UserRepo.updateLastLogin(user.id);

    AuditRepo.log({ userId: user.id, action: 'LOGIN', resource: 'users', resourceId: user.id, ip, userAgent });

    return {
      accessToken,
      refreshToken,
      user: {
        id: user.id,
        name: user.name,
        role: user.role,
        healthCenter: user.health_center,
      }
    };
  }

  /**
   * Renew access token using a valid refresh token.
   */
  async refresh({ refreshToken, ip, userAgent }) {
    let payload;
    try {
      payload = jwt.verify(refreshToken, authCfg.refreshSecret);
    } catch {
      throw new Error('Refresh token inválido ou expirado.');
    }

    const user = UserRepo.findById(payload.sub);
    if (!user || !user.refresh_token_hash) throw new Error('Sessão encerrada. Faça login novamente.');

    const match = await bcrypt.compare(refreshToken, user.refresh_token_hash);
    if (!match) throw new Error('Refresh token inválido.');

    const newAccessToken = jwt.sign(
      { sub: user.id, role: user.role, name: user.name },
      authCfg.accessSecret,
      { expiresIn: authCfg.accessExpires }
    );

    AuditRepo.log({ userId: user.id, action: 'TOKEN_REFRESH', resource: 'users', ip, userAgent });

    return { accessToken: newAccessToken };
  }

  /**
   * Revoke refresh token (logout).
   */
  async logout({ userId, ip, userAgent }) {
    UserRepo.revokeRefreshToken(userId);
    AuditRepo.log({ userId, action: 'LOGOUT', resource: 'users', resourceId: userId, ip, userAgent });
  }

  /**
   * Create a new user (admin only).
   */
  async createUser({ name, cpf, cns, role, healthCenter, password, createdBy, ip, userAgent }) {
    const cpfHash      = hashIndex(cpf);
    const existing     = UserRepo.findByCpfHash(cpfHash);
    if (existing) throw new Error('CPF já cadastrado no sistema.');

    const { encrypt } = require('../config/crypto');
    const passwordHash = await bcrypt.hash(password, 12);

    const id = uuid();
    UserRepo.create({ id, name, cpfHash, cpfEncrypted: encrypt(cpf), cns, role, healthCenter, passwordHash });

    AuditRepo.log({ userId: createdBy, action: 'CREATE', resource: 'users', resourceId: id, details: { name, role }, ip, userAgent });
    return { id, name, role };
  }
}

module.exports = new AuthService();
