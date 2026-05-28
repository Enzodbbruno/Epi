'use strict';
const AuthService = require('../services/AuthService');

class AuthController {
  async login(req, res) {
    try {
      const { cpf, password } = req.body;
      const result = await AuthService.login({
        cpf, password,
        ip:        req.ip,
        userAgent: req.get('user-agent'),
      });
      return res.status(200).json(result);
    } catch (err) {
      return res.status(401).json({ error: err.message });
    }
  }

  async refresh(req, res) {
    try {
      const { refreshToken } = req.body;
      const result = await AuthService.refresh({
        refreshToken,
        ip:        req.ip,
        userAgent: req.get('user-agent'),
      });
      return res.status(200).json(result);
    } catch (err) {
      return res.status(401).json({ error: err.message });
    }
  }

  async logout(req, res) {
    try {
      await AuthService.logout({
        userId:    req.user.id,
        ip:        req.ip,
        userAgent: req.get('user-agent'),
      });
      return res.status(200).json({ message: 'Sessão encerrada com sucesso.' });
    } catch (err) {
      return res.status(500).json({ error: err.message });
    }
  }

  async createUser(req, res) {
    try {
      const result = await AuthService.createUser({
        ...req.body,
        createdBy: req.user.id,
        ip:        req.ip,
        userAgent: req.get('user-agent'),
      });
      return res.status(201).json(result);
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }

  me(req, res) {
    return res.status(200).json(req.user);
  }
}

module.exports = new AuthController();
