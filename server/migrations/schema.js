'use strict';
const db = require('../config/database');

/**
 * Executes all DDL migrations to create/update schema.
 * Uses IF NOT EXISTS so it is safe to run multiple times (idempotent).
 */
function runMigrations() {
  db.exec(`
    -- ==================== USERS ====================
    CREATE TABLE IF NOT EXISTS users (
      id               TEXT PRIMARY KEY,
      name             TEXT NOT NULL,
      cpf_hash         TEXT UNIQUE,           -- HMAC-SHA256 do CPF (busca)
      cpf_encrypted    TEXT,                  -- AES-256-GCM do CPF (leitura)
      cns              TEXT,
      role             TEXT NOT NULL DEFAULT 'agente'
                         CHECK(role IN ('admin','medico','enfermeiro','agente','visitante')),
      health_center    TEXT,
      password_hash    TEXT NOT NULL,
      refresh_token_hash TEXT,                -- hash do último refresh token
      is_active        INTEGER NOT NULL DEFAULT 1,
      last_login       TEXT,
      created_at       TEXT NOT NULL DEFAULT (datetime('now')),
      updated_at       TEXT NOT NULL DEFAULT (datetime('now'))
    );

    -- ==================== PATIENTS ====================
    CREATE TABLE IF NOT EXISTS patients (
      id               TEXT PRIMARY KEY,
      name             TEXT NOT NULL,
      cpf_hash         TEXT UNIQUE,
      cpf_encrypted    TEXT,
      cns              TEXT UNIQUE,
      birth_date       TEXT,
      mother_name      TEXT,
      sex              TEXT CHECK(sex IN ('M','F','I')),
      race             TEXT,
      blood_type       TEXT,
      education        TEXT,
      zone             TEXT,
      address          TEXT,
      neighborhood     TEXT,
      municipality     TEXT,
      uf               TEXT,
      phone_encrypted  TEXT,
      conditions       TEXT DEFAULT '[]',     -- JSON array
      allergies        TEXT DEFAULT '[]',
      vaccines         TEXT DEFAULT '[]',
      created_by       TEXT REFERENCES users(id),
      created_at       TEXT NOT NULL DEFAULT (datetime('now')),
      updated_at       TEXT NOT NULL DEFAULT (datetime('now'))
    );

    CREATE INDEX IF NOT EXISTS idx_patients_name ON patients(name COLLATE NOCASE);
    CREATE INDEX IF NOT EXISTS idx_patients_cns  ON patients(cns);

    -- ==================== NOTIFICATIONS (Ficha SINAN) ====================
    CREATE TABLE IF NOT EXISTS notifications (
      id               TEXT PRIMARY KEY,
      patient_id       TEXT NOT NULL REFERENCES patients(id),
      disease          TEXT NOT NULL,
      health_unit      TEXT,
      symptoms_date    TEXT,
      symptoms         TEXT DEFAULT '[]',     -- JSON array
      clinical_signs   TEXT DEFAULT '{}',     -- JSON
      lab_results      TEXT DEFAULT '{}',     -- JSON
      notificator_id   TEXT REFERENCES users(id),
      status           TEXT NOT NULL DEFAULT 'pendente'
                         CHECK(status IN ('pendente','enviado','confirmado','cancelado')),
      sinan_number     TEXT,
      observations     TEXT,
      created_at       TEXT NOT NULL DEFAULT (datetime('now')),
      updated_at       TEXT NOT NULL DEFAULT (datetime('now'))
    );

    -- ==================== AUDIT LOG (LGPD Art. 37) ====================
    CREATE TABLE IF NOT EXISTS audit_logs (
      id               INTEGER PRIMARY KEY AUTOINCREMENT,
      user_id          TEXT,
      action           TEXT NOT NULL,         -- CREATE, READ, UPDATE, DELETE
      resource         TEXT NOT NULL,         -- patients, notifications, users
      resource_id      TEXT,
      details          TEXT,                  -- JSON com detalhes relevantes
      ip_address       TEXT,
      user_agent       TEXT,
      timestamp        TEXT NOT NULL DEFAULT (datetime('now'))
    );

    CREATE INDEX IF NOT EXISTS idx_audit_user     ON audit_logs(user_id);
    CREATE INDEX IF NOT EXISTS idx_audit_resource ON audit_logs(resource, resource_id);
    CREATE INDEX IF NOT EXISTS idx_audit_time     ON audit_logs(timestamp);
  `);

  console.log('[EpiConecta] Migrações executadas com sucesso.');
}

module.exports = { runMigrations };
