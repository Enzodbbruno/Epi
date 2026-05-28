'use strict';
require('dotenv').config();
const Database = require('better-sqlite3');
const path     = require('path');
const fs       = require('fs');

const dbPath = path.resolve(__dirname, '..', process.env.DB_PATH || './data/epiconecta.db');
const dbDir  = path.dirname(dbPath);

if (!fs.existsSync(dbDir)) fs.mkdirSync(dbDir, { recursive: true });

/** @type {import('better-sqlite3').Database} */
const db = new Database(dbPath, { verbose: process.env.NODE_ENV === 'development' ? console.log : null });

// WAL mode para melhor concorrência
db.pragma('journal_mode = WAL');
db.pragma('foreign_keys = ON');

module.exports = db;
