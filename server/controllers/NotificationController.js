'use strict';
const NotifService = require('../services/NotificationService');

class NotificationController {
  create(req, res) {
    try {
      const result = NotifService.create({ data: req.body, userId: req.user.id, ip: req.ip, userAgent: req.get('user-agent') });
      return res.status(201).json(result);
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }

  update(req, res) {
    try {
      const result = NotifService.update({ id: req.params.id, data: req.body, userId: req.user.id, ip: req.ip, userAgent: req.get('user-agent') });
      return res.status(200).json(result);
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }

  listMine(req, res) {
    const results = NotifService.listMine({ userId: req.user.id, ip: req.ip, userAgent: req.get('user-agent') });
    return res.status(200).json(results);
  }

  listRecent(req, res) {
    const results = NotifService.listRecent({ limit: 50, userId: req.user.id, ip: req.ip, userAgent: req.get('user-agent') });
    return res.status(200).json(results);
  }

  getStats(req, res) {
    return res.status(200).json(NotifService.getStats());
  }
}

module.exports = new NotificationController();
