'use strict';
const db = require('../config/database');

/**
 * Audit Log Repository — grava toda ação sobre dados sensíveis (LGPD Art. 37)
 */
class AuditRepository {
  async log({ userId, action, resource, resourceId, details, ip, userAgent }) {
    try {
      await db.query(`
        INSERT INTO audit_logs (user_id, action, resource, resource_id, details, ip_address, user_agent)
        VALUES ($1, $2, $3, $4, $5, $6, $7)
      `, [
        userId   || null,
        action,
        resource,
        resourceId || null,
        details ? JSON.stringify(details) : null,
        ip       || null,
        userAgent || null
      ]);
    } catch (err) {
      console.error('[AuditRepository Error] Falha ao registrar log de auditoria:', err.message);
    }
  }
}

module.exports = new AuditRepository();
