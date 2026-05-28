'use strict';
const db = require('../config/database');

/**
 * Audit Log Repository — grava toda ação sobre dados sensíveis (LGPD Art. 37)
 */
class AuditRepository {
  log({ userId, action, resource, resourceId, details, ip, userAgent }) {
    db.prepare(`
      INSERT INTO audit_logs (user_id, action, resource, resource_id, details, ip_address, user_agent)
      VALUES (?, ?, ?, ?, ?, ?, ?)
    `).run(
      userId   || null,
      action,
      resource,
      resourceId || null,
      details ? JSON.stringify(details) : null,
      ip       || null,
      userAgent || null
    );
  }
}

module.exports = new AuditRepository();
