'use strict';
const db = require('../config/database');

class NotificationRepository {
  async findById(id) {
    const res = await db.query(`
      SELECT n.*, p.name as patient_name, u.name as notificator_name
      FROM notifications n
      LEFT JOIN patients p ON n.patient_id = p.id
      LEFT JOIN users u ON n.notificator_id = u.id
      WHERE n.id = $1
    `, [id]);
    return res.rows[0];
  }

  async findByPatient(patientId) {
    const res = await db.query(`
      SELECT n.*, u.name as notificator_name
      FROM notifications n
      LEFT JOIN users u ON n.notificator_id = u.id
      WHERE n.patient_id = $1
      ORDER BY n.created_at DESC
    `, [patientId]);
    return res.rows;
  }

  async findByNotificator(userId, { limit = 20, offset = 0 } = {}) {
    const res = await db.query(`
      SELECT n.*, p.name as patient_name, p.neighborhood as patient_neighborhood
      FROM notifications n
      LEFT JOIN patients p ON n.patient_id = p.id
      WHERE n.notificator_id = $1
      ORDER BY n.created_at DESC
      LIMIT $2 OFFSET $3
    `, [userId, limit, offset]);
    return res.rows;
  }

  async listRecent({ limit = 50, offset = 0 } = {}) {
    const res = await db.query(`
      SELECT n.id, n.disease, n.status, n.created_at, n.symptoms_date,
             p.name as patient_name, p.neighborhood as patient_neighborhood,
             u.name as notificator_name, u.health_center
      FROM notifications n
      LEFT JOIN patients p ON n.patient_id = p.id
      LEFT JOIN users u ON n.notificator_id = u.id
      ORDER BY n.created_at DESC
      LIMIT $1 OFFSET $2
    `, [limit, offset]);
    return res.rows;
  }

  async create(data) {
    await db.query(`
      INSERT INTO notifications
        (id, patient_id, disease, health_unit, symptoms_date, symptoms,
         clinical_signs, lab_results, notificator_id, observations)
      VALUES
        ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)
    `, [
      data.id,
      data.patientId,
      data.disease,
      data.healthUnit,
      data.symptomsDate,
      data.symptoms,
      data.clinicalSigns,
      data.labResults,
      data.notificatorId,
      data.observations
    ]);
  }

  async update(id, data) {
    await db.query(`
      UPDATE notifications
      SET disease = $1,
          health_unit = $2,
          symptoms_date = $3,
          symptoms = $4,
          clinical_signs = $5,
          lab_results = $6,
          observations = $7,
          updated_at = CURRENT_TIMESTAMP
      WHERE id = $8
    `, [
      data.disease,
      data.healthUnit,
      data.symptomsDate,
      data.symptoms,
      data.clinicalSigns,
      data.labResults,
      data.observations,
      id
    ]);
  }

  async updateStatus(id, status, sinanNumber = null) {
    await db.query(`
      UPDATE notifications SET status = $1, sinan_number = $2, updated_at = CURRENT_TIMESTAMP
      WHERE id = $3
    `, [status, sinanNumber, id]);
  }

  async countByDisease() {
    const res = await db.query(`
      SELECT disease, COUNT(*) as total FROM notifications GROUP BY disease ORDER BY total DESC
    `);
    // Convert count outputs to integer because Postgres returns count as string
    return res.rows.map(row => ({
      disease: row.disease,
      total: parseInt(row.total, 10)
    }));
  }

  async countByStatus() {
    const res = await db.query(`
      SELECT status, COUNT(*) as total FROM notifications GROUP BY status
    `);
    return res.rows.map(row => ({
      status: row.status,
      total: parseInt(row.total, 10)
    }));
  }
}

module.exports = new NotificationRepository();
