'use strict';
const rateLimit = require('express-rate-limit');

/** Strict limiter for auth endpoints (brute-force protection) */
const authLimiter = rateLimit({
  windowMs: 60 * 1000,      // 1 minuto
  max: 5,
  standardHeaders: true,
  legacyHeaders: false,
  message: { error: 'Muitas tentativas de login. Tente novamente em 1 minuto.' },
  skipSuccessfulRequests: true,
});

/** General API limiter */
const apiLimiter = rateLimit({
  windowMs: 60 * 1000,
  max: 120,
  standardHeaders: true,
  legacyHeaders: false,
  message: { error: 'Limite de requisições atingido. Aguarde um momento.' },
});

module.exports = { authLimiter, apiLimiter };
