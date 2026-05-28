'use strict';
const db = require('../config/database');

class NotificationRepository {
  findById(id) {
    return db.prepare(`
      SELECT n.*, p.name as patient_name, u.name as notificator_name
      FROM notifications n
      LEFT JOIN patients p ON n.patient_id = p.id
      LEFT JOIN users u ON n.notificator_id = u.id
      WHERE n.id = ?
    `).get(id);
  }

  findByPatient(patientId) {
    return db.prepare(`
      SELECT n.*, u.name as notificator_name
      FROM notifications n
      LEFT JOIN users u ON n.notificator_id = u.id
      WHERE n.patient_id = ?
      ORDER BY n.created_at DESC
    `).all(patientId);
  }

  findByNotificator(userId, { limit = 20, offset = 0 } = {}) {
    return db.prepare(`
      SELECT n.*, p.name as patient_name, p.neighborhood as patient_neighborhood
      FROM notifications n
      LEFT JOIN patients p ON n.patient_id = p.id
      WHERE n.notificator_id = ?
      ORDER BY n.created_at DESC
      LIMIT ? OFFSET ?
    `).all(userId, limit, offset);
  }

  listRecent({ limit = 50, offset = 0 } = {}) {
    return db.prepare(`
      SELECT n.id, n.disease, n.status, n.created_at, n.symptoms_date,
             p.name as patient_name, p.neighborhood as patient_neighborhood,
             u.name as notificator_name, u.health_center
      FROM notifications n
      LEFT JOIN patients p ON n.patient_id = p.id
      LEFT JOIN users u ON n.notificator_id = u.id
      ORDER BY n.created_at DESC
      LIMIT ? OFFSET ?
    `).all(limit, offset);
  }

  create(data) {
    return db.prepare(`
      INSERT INTO notifications
        (id, patient_id, disease, health_unit, symptoms_date, symptoms,
         clinical_signs, lab_results, notificator_id, observations)
      VALUES
        (@id,@patientId,@disease,@healthUnit,@symptomsDate,@symptoms,
         @clinicalSigns,@labResults,@notificatorId,@observations)
    `).run(data);
  }

  update(id, data) {
    return db.prepare(`
      UPDATE notifications
      SET disease = @disease,
          health_unit = @healthUnit,
          symptoms_date = @symptomsDate,
          symptoms = @symptoms,
          clinical_signs = @clinicalSigns,
          lab_results = @labResults,
          observations = @observations,
          updated_at = datetime('now')
      WHERE id = @id
    `).run({ ...data, id });
  }

  updateStatus(id, status, sinanNumber = null) {
    return db.prepare(`
      UPDATE notifications SET status = ?, sinan_number = ?, updated_at = datetime('now')
      WHERE id = ?
    `).run(status, sinanNumber, id);
  }

  countByDisease() {
    return db.prepare(`
      SELECT disease, COUNT(*) as total FROM notifications GROUP BY disease ORDER BY total DESC
    `).all();
  }

  countByStatus() {
    return db.prepare(`
      SELECT status, COUNT(*) as total FROM notifications GROUP BY status
    `).all();
  }
}

module.exports = new NotificationRepository();
