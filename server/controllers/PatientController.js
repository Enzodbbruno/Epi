'use strict';
const PatientService = require('../services/PatientService');

class PatientController {
  search(req, res) {
    try {
      const { q } = req.query;
      const results = PatientService.search({ q, userId: req.user.id, ip: req.ip, userAgent: req.get('user-agent') });
      return res.status(200).json(results);
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }

  getById(req, res) {
    try {
      const patient = PatientService.getById({ id: req.params.id, userId: req.user.id, ip: req.ip, userAgent: req.get('user-agent') });
      return res.status(200).json(patient);
    } catch (err) {
      return res.status(404).json({ error: err.message });
    }
  }

  create(req, res) {
    try {
      const result = PatientService.create({ data: req.body, userId: req.user.id, ip: req.ip, userAgent: req.get('user-agent') });
      return res.status(201).json(result);
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }
}

module.exports = new PatientController();
