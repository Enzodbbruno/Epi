'use strict';
require('dotenv').config();

module.exports = {
  accessSecret:  process.env.JWT_ACCESS_SECRET  || 'epi_access_secret_mude_em_producao_64bytes_min_0a1b2c3d4e5f',
  refreshSecret: process.env.JWT_REFRESH_SECRET || 'epi_refresh_secret_mude_em_producao_64bytes_min_9z8y7x6w5v4u',
  accessExpires: process.env.JWT_ACCESS_EXPIRES  || '15m',
  refreshExpires: process.env.JWT_REFRESH_EXPIRES || '7d',
};
