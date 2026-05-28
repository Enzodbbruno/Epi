'use strict';
const NotifService = require('../services/NotificationService');

class NotificationController {
  async create(req, res) {
    try {
      const result = await NotifService.create({ data: req.body, userId: req.user.id, ip: req.ip, userAgent: req.get('user-agent') });
      return res.status(201).json(result);
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }

  async update(req, res) {
    try {
      const result = await NotifService.update({ id: req.params.id, data: req.body, userId: req.user.id, ip: req.ip, userAgent: req.get('user-agent') });
      return res.status(200).json(result);
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }

  async listMine(req, res) {
    try {
      const results = await NotifService.listMine({ userId: req.user.id, ip: req.ip, userAgent: req.get('user-agent') });
      return res.status(200).json(results);
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }

  async listRecent(req, res) {
    try {
      const results = await NotifService.listRecent({ limit: 50, userId: req.user.id, ip: req.ip, userAgent: req.get('user-agent') });
      return res.status(200).json(results);
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }

  async getStats(req, res) {
    try {
      const stats = await NotifService.getStats();
      return res.status(200).json(stats);
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }
}

module.exports = new NotificationController();
