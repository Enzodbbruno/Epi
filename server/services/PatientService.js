'use strict';
const { v4: uuid } = require('uuid');
const { hashIndex, decrypt, encrypt } = require('../config/crypto');
const PatientRepo = require('../repositories/PatientRepository');
const AuditRepo   = require('../repositories/AuditRepository');
const NotifRepo   = require('../repositories/NotificationRepository');

class PatientService {
  /**
   * Search patients by name, CNS, or CPF.
   * CPF is passed as plain text, hashed here for lookup.
   */
  async search({ q, userId, ip, userAgent }) {
    const term = q ? q.trim() : '';
    if (term.length < 2) {
      const rows = await PatientRepo.listRecent(10);
      return rows.map(r => this._sanitize(r));
    }

    const cpfHash = hashIndex(term); // will only match if q is a valid CPF

    const rows = await PatientRepo.search({ term, cpfHash });

    await AuditRepo.log({ userId, action: 'SEARCH', resource: 'patients', details: { query: term.substring(0, 4) + '***' }, ip, userAgent });

    return rows.map(r => this._sanitize(r));
  }

  /**
   * Get full patient record by ID.
   */
  async getById({ id, userId, ip, userAgent }) {
    const row = await PatientRepo.findById(id);
    if (!row) throw new Error('Paciente não encontrado.');

    await AuditRepo.log({ userId, action: 'READ', resource: 'patients', resourceId: id, ip, userAgent });

    const patient = this._sanitizeFull(row);

    // Buscar as notificações associadas ao paciente
    const notifications = await NotifRepo.findByPatient(id);

    // Mapear notificações para o formato de histórico esperado no frontend
    const notifHistory = notifications.map(n => {
      const isOwner = n.notificator_id === userId;
      // Capitaliza primeira letra da doença
      const diseaseName = n.disease.charAt(0).toUpperCase() + n.disease.slice(1);
      
      return {
        date: n.created_at ? new Date(n.created_at).toLocaleDateString('pt-BR') : new Date().toLocaleDateString('pt-BR'),
        title: `Notificação - ${diseaseName}`,
        desc: `Paciente notificado por suspeita. Sintomas reportados: ${n.symptoms ? JSON.parse(n.symptoms).join(', ') : ''}. Local: ${n.health_unit || ''}. Notificado por: ${n.notificator_name || 'Profissional'}`,
        isNotification: true,
        notificatorId: n.notificator_id,
        isOwner: isOwner,
        notificationData: {
          id: n.id,
          disease: n.disease,
          healthUnit: n.health_unit,
          symptomsDate: n.symptoms_date,
          mainSymptoms: n.symptoms ? JSON.parse(n.symptoms).join(', ') : '',
          clinicalSigns: JSON.parse(n.clinical_signs || '{}'),
          labResults: JSON.parse(n.lab_results || '{}'),
          observations: n.observations,
          notificatorName: n.notificator_name,
          notificatorId: n.notificator_id
        }
      };
    });

    patient.history = [
      ...notifHistory,
      {
        date: patient.createdAt ? new Date(patient.createdAt).toLocaleDateString('pt-BR') : new Date().toLocaleDateString('pt-BR'),
        title: 'Consulta Geral',
        desc: 'Abertura de Prontuário no sistema EpiConecta.'
      }
    ];

    return patient;
  }

  /**
   * Create a new patient record.
   */
  async create({ data, userId, ip, userAgent }) {
    const cpfHash = hashIndex(data.cpf);
    const existing = await PatientRepo.findByCpfHash(cpfHash);
    if (existing) throw new Error('Paciente com este CPF já está cadastrado.');

    const id = uuid();
    await PatientRepo.create({
      id,
      name:         data.name,
      cpfHash,
      cpfEncrypted: encrypt(data.cpf),
      cns:          data.cns,
      birthDate:    data.birthDate,
      motherName:   data.motherName,
      sex:          data.sex,
      race:         data.race,
      bloodType:    data.bloodType,
      education:    data.education,
      zone:         data.zone,
      address:      data.address,
      neighborhood: data.neighborhood,
      municipality: data.municipality,
      uf:           data.uf,
      phoneEncrypted: encrypt(data.phone),
      conditions:   JSON.stringify(data.conditions || []),
      allergies:    JSON.stringify(data.allergies  || []),
      vaccines:     JSON.stringify(data.vaccines   || []),
      createdBy:    userId,
    });

    await AuditRepo.log({ userId, action: 'CREATE', resource: 'patients', resourceId: id, details: { name: data.name }, ip, userAgent });
    return { id };
  }

  /** Strip encrypted fields, decrypt only what's needed for the response */
  _sanitize(row) {
    return {
      id:           row.id,
      name:         row.name,
      cns:          row.cns,
      birthDate:    row.birth_date,
      sex:          row.sex,
      race:         row.race,
      municipality: row.municipality,
      uf:           row.uf,
      bloodType:    row.blood_type,
    };
  }

  _sanitizeFull(row) {
    return {
      id:           row.id,
      name:         row.name,
      cpf:          decrypt(row.cpf_encrypted),
      cns:          row.cns,
      birthDate:    row.birth_date,
      motherName:   row.mother_name,
      sex:          row.sex,
      race:         row.race,
      bloodType:    row.blood_type,
      education:    row.education,
      zone:         row.zone,
      address:      row.address,
      neighborhood: row.neighborhood,
      municipality: row.municipality,
      uf:           row.uf,
      phone:        decrypt(row.phone_encrypted),
      conditions:   JSON.parse(row.conditions || '[]'),
      allergies:    JSON.parse(row.allergies  || '[]'),
      vaccines:     JSON.parse(row.vaccines   || '[]'),
      createdAt:    row.created_at,
    };
  }
}

module.exports = new PatientService();
