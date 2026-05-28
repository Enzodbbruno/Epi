'use strict';
const db = require('../config/database');

class UserRepository {
  findById(id) {
    return db.prepare('SELECT * FROM users WHERE id = ? AND is_active = 1').get(id);
  }

  findByCpfHash(cpfHash) {
    return db.prepare('SELECT * FROM users WHERE cpf_hash = ? AND is_active = 1').get(cpfHash);
  }

  findByName(name) {
    return db.prepare("SELECT * FROM users WHERE name LIKE ? AND is_active = 1").all(`%${name}%`);
  }

  create({ id, name, cpfHash, cpfEncrypted, cns, role, healthCenter, passwordHash }) {
    return db.prepare(`
      INSERT INTO users (id, name, cpf_hash, cpf_encrypted, cns, role, health_center, password_hash)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?)
    `).run(id, name, cpfHash, cpfEncrypted, cns, role, healthCenter, passwordHash);
  }

  updateRefreshToken(id, tokenHash) {
    db.prepare("UPDATE users SET refresh_token_hash = ?, updated_at = datetime('now') WHERE id = ?")
      .run(tokenHash, id);
  }

  updateLastLogin(id) {
    db.prepare("UPDATE users SET last_login = datetime('now'), updated_at = datetime('now') WHERE id = ?")
      .run(id);
  }

  revokeRefreshToken(id) {
    db.prepare("UPDATE users SET refresh_token_hash = NULL, updated_at = datetime('now') WHERE id = ?")
      .run(id);
  }

  listAll() {
    return db.prepare('SELECT id, name, role, health_center, is_active, last_login, created_at FROM users').all();
  }
}

module.exports = new UserRepository();
