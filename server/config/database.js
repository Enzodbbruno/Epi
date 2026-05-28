'use strict';
require('dotenv').config();
const { Pool } = require('pg');

let connectionString = process.env.DATABASE_URL || process.env.POSTGRES_URL;

if (connectionString) {
  // Limpa channel_binding da query string para evitar que o parser do node-postgres (pg) quebre,
  // já que habilitamos de forma explícita nas opções do Pool
  connectionString = connectionString
    .replace('channel_binding=require', '')
    .replace('&&', '&')
    .replace('?&', '?');
} else {
  console.warn('[EpiConecta Warning] A variável de ambiente DATABASE_URL não está configurada!');
}

const isProduction = process.env.NODE_ENV === 'production';

const pool = new Pool({
  connectionString: connectionString,
  enableChannelBinding: true,
  ssl: isProduction ? { rejectUnauthorized: false } : false
});

module.exports = {
  query: (text, params) => pool.query(text, params),
  pool
};
