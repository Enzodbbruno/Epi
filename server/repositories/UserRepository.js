'use strict';
const db = require('../config/database');

class UserRepository {
  async findById(id) {
    const res = await db.query('SELECT * FROM users WHERE id = $1 AND is_active = 1', [id]);
    return res.rows[0];
  }

  async findByCpfHash(cpfHash) {
    const res = await db.query('SELECT * FROM users WHERE cpf_hash = $1 AND is_active = 1', [cpfHash]);
    return res.rows[0];
  }

  async findByName(name) {
    const res = await db.query('SELECT * FROM users WHERE name ILIKE $1 AND is_active = 1', [`%${name}%`]);
    return res.rows;
  }

  async create({ id, name, cpfHash, cpfEncrypted, cns, role, healthCenter, passwordHash }) {
    await db.query(`
      INSERT INTO users (id, name, cpf_hash, cpf_encrypted, cns, role, health_center, password_hash)
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
    `, [id, name, cpfHash, cpfEncrypted, cns, role, healthCenter, passwordHash]);
  }

  async updateRefreshToken(id, tokenHash) {
    await db.query("UPDATE users SET refresh_token_hash = $1, updated_at = CURRENT_TIMESTAMP WHERE id = $2", [tokenHash, id]);
  }

  async updateLastLogin(id) {
    await db.query("UPDATE users SET last_login = CURRENT_TIMESTAMP, updated_at = CURRENT_TIMESTAMP WHERE id = $1", [id]);
  }

  async revokeRefreshToken(id) {
    await db.query("UPDATE users SET refresh_token_hash = NULL, updated_at = CURRENT_TIMESTAMP WHERE id = $1", [id]);
  }

  async listAll() {
    const res = await db.query('SELECT id, name, role, health_center, is_active, last_login, created_at FROM users');
    return res.rows;
  }
}

module.exports = new UserRepository();
