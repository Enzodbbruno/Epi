'use strict';
const { v4: uuid } = require('uuid');
const NotifRepo   = require('../repositories/NotificationRepository');
const PatientRepo = require('../repositories/PatientRepository');
const AuditRepo   = require('../repositories/AuditRepository');

class NotificationService {
  /**
   * Create a new SINAN notification.
   */
  create({ data, userId, ip, userAgent }) {
    const patient = PatientRepo.findById(data.patientId);
    if (!patient) throw new Error('Paciente não encontrado.');

    const id = uuid();
    NotifRepo.create({
      id,
      patientId:     data.patientId,
      disease:       data.disease,
      healthUnit:    data.healthUnit,
      symptomsDate:  data.symptomsDate,
      symptoms:      JSON.stringify(data.symptoms      || []),
      clinicalSigns: JSON.stringify(data.clinicalSigns || {}),
      labResults:    JSON.stringify(data.labResults    || {}),
      notificatorId: userId,
      observations:  data.observations || null,
    });

    AuditRepo.log({
      userId,
      action: 'CREATE',
      resource: 'notifications',
      resourceId: id,
      details: { disease: data.disease, patientId: data.patientId },
      ip, userAgent
    });

    return { id };
  }

  /**
   * Update an existing SINAN notification.
   */
  update({ id, data, userId, ip, userAgent }) {
    const notification = NotifRepo.findById(id);
    if (!notification) throw new Error('Notificação não encontrada.');

    // Validar se o usuário logado é o proprietário
    if (notification.notificator_id !== userId) {
      throw new Error('Apenas o profissional que criou esta notificação pode editá-la.');
    }

    NotifRepo.update(id, {
      disease:       data.disease,
      healthUnit:    data.healthUnit,
      symptomsDate:  data.symptomsDate,
      symptoms:      JSON.stringify(data.symptoms      || []),
      clinicalSigns: JSON.stringify(data.clinicalSigns || {}),
      labResults:    JSON.stringify(data.labResults    || {}),
      observations:  data.observations || null,
    });

    AuditRepo.log({
      userId,
      action: 'UPDATE',
      resource: 'notifications',
      resourceId: id,
      details: { disease: data.disease, patientId: notification.patient_id },
      ip, userAgent
    });

    return { id };
  }

  /**
   * List recent notifications (for dashboard/admin).
   */
  listRecent({ limit = 50, userId, ip, userAgent }) {
    AuditRepo.log({ userId, action: 'LIST', resource: 'notifications', ip, userAgent });
    return NotifRepo.listRecent({ limit });
  }

  /**
   * List notifications of the logged-in user.
   */
  listMine({ userId, ip, userAgent }) {
    return NotifRepo.findByNotificator(userId);
  }

  /**
   * Get analytics data for dashboard.
   */
  getStats() {
    return {
      byDisease: NotifRepo.countByDisease(),
      byStatus:  NotifRepo.countByStatus(),
    };
  }
}

module.exports = new NotificationService();
