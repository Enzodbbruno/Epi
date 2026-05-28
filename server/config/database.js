'use strict';
require('dotenv').config();
const Database = require('better-sqlite3');
const path     = require('path');
const fs       = require('fs');

let dbPath = path.resolve(__dirname, '..', process.env.DB_PATH || './data/epiconecta.db');
let dbDir  = path.dirname(dbPath);

try {
  if (!fs.existsSync(dbDir)) {
    fs.mkdirSync(dbDir, { recursive: true });
  }
} catch (err) {
  console.warn(`[EpiConecta Warning] Falha ao criar diretório '${dbDir}' (${err.message}). Usando fallback local.`);
  const fallbackDir = path.resolve(__dirname, '..', 'data');
  try {
    if (!fs.existsSync(fallbackDir)) {
      fs.mkdirSync(fallbackDir, { recursive: true });
    }
  } catch (e) {}
  dbPath = path.join(fallbackDir, 'epiconecta.db');
}

/** @type {import('better-sqlite3').Database} */
const db = new Database(dbPath, { verbose: process.env.NODE_ENV === 'development' ? console.log : null });

// WAL mode para melhor concorrência
db.pragma('journal_mode = WAL');
db.pragma('foreign_keys = ON');

module.exports = db;
