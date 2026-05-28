'use strict';
const jwt     = require('jsonwebtoken');
const authCfg = require('../config/auth');

/**
 * Middleware: verifica o JWT no header Authorization: Bearer <token>
 * Injeta req.user = { id, role, name }
 */
function authenticate(req, res, next) {
  const authHeader = req.headers['authorization'];
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ error: 'Token de acesso não fornecido.' });
  }

  const token = authHeader.slice(7);
  try {
    const payload = jwt.verify(token, authCfg.accessSecret);
    req.user = { id: payload.sub, role: payload.role, name: payload.name };
    next();
  } catch (err) {
    if (err.name === 'TokenExpiredError') {
      return res.status(401).json({ error: 'Token expirado. Renove sua sessão.' });
    }
    return res.status(401).json({ error: 'Token inválido.' });
  }
}

module.exports = authenticate;
