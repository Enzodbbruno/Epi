'use strict';
const db = require('../config/database');

/**
 * Executes all DDL migrations to create/update schema in PostgreSQL.
 * Uses IF NOT EXISTS so it is safe to run multiple times (idempotent).
 */
async function runMigrations() {
  try {
    await db.query(`
      -- ==================== USERS ====================
      CREATE TABLE IF NOT EXISTS users (
        id               VARCHAR(100) PRIMARY KEY,
        name             VARCHAR(255) NOT NULL,
        cpf_hash         VARCHAR(100) UNIQUE,           -- HMAC-SHA256 do CPF (busca)
        cpf_encrypted    TEXT,                          -- AES-256-GCM do CPF (leitura)
        cns              VARCHAR(100),
        role             VARCHAR(50) NOT NULL DEFAULT 'agente'
                           CHECK(role IN ('admin','medico','enfermeiro','agente','visitante')),
        health_center    VARCHAR(255),
        password_hash    TEXT NOT NULL,
        refresh_token_hash TEXT,                        -- hash do último refresh token
        is_active        INTEGER NOT NULL DEFAULT 1,
        last_login       TIMESTAMP,
        created_at       TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
        updated_at       TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
      );

      -- ==================== PATIENTS ====================
      CREATE TABLE IF NOT EXISTS patients (
        id               VARCHAR(100) PRIMARY KEY,
        name             VARCHAR(255) NOT NULL,
        cpf_hash         VARCHAR(100) UNIQUE,
        cpf_encrypted    TEXT,
        cns              VARCHAR(100) UNIQUE,
        birth_date       VARCHAR(50),
        mother_name      VARCHAR(255),
        sex              VARCHAR(10) CHECK(sex IN ('M','F','I')),
        race             VARCHAR(100),
        blood_type       VARCHAR(10),
        education        VARCHAR(100),
        zone             VARCHAR(50),
        address          TEXT,
        neighborhood     VARCHAR(255),
        municipality     VARCHAR(255),
        uf               VARCHAR(10),
        phone_encrypted  TEXT,
        conditions       TEXT DEFAULT '[]',     -- JSON array as string
        allergies        TEXT DEFAULT '[]',
        vaccines         TEXT DEFAULT '[]',
        created_by       VARCHAR(100) REFERENCES users(id),
        created_at       TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
        updated_at       TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
      );

      CREATE INDEX IF NOT EXISTS idx_patients_name ON patients(name);
      CREATE INDEX IF NOT EXISTS idx_patients_cns  ON patients(cns);

      -- ==================== NOTIFICATIONS (Ficha SINAN) ====================
      CREATE TABLE IF NOT EXISTS notifications (
        id               VARCHAR(100) PRIMARY KEY,
        patient_id       VARCHAR(100) NOT NULL REFERENCES patients(id),
        disease          VARCHAR(255) NOT NULL,
        health_unit      VARCHAR(255),
        symptoms_date    VARCHAR(50),
        symptoms         TEXT DEFAULT '[]',     -- JSON array as string
        clinical_signs   TEXT DEFAULT '{}',     -- JSON as string
        lab_results      TEXT DEFAULT '{}',     -- JSON as string
        notificator_id   VARCHAR(100) REFERENCES users(id),
        status           VARCHAR(50) NOT NULL DEFAULT 'pendente'
                           CHECK(status IN ('pendente','enviado','confirmado','cancelado')),
        sinan_number     VARCHAR(100),
        observations     TEXT,
        created_at       TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
        updated_at       TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
      );

      -- ==================== AUDIT LOG (LGPD Art. 37) ====================
      CREATE TABLE IF NOT EXISTS audit_logs (
        id               SERIAL PRIMARY KEY,
        user_id          VARCHAR(100),
        action           VARCHAR(50) NOT NULL,         -- CREATE, READ, UPDATE, DELETE
        resource         VARCHAR(50) NOT NULL,         -- patients, notifications, users
        resource_id      VARCHAR(100),
        details          TEXT,                         -- JSON com detalhes relevantes as string
        ip_address       VARCHAR(50),
        user_agent       TEXT,
        timestamp        TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
      );

      CREATE INDEX IF NOT EXISTS idx_audit_user     ON audit_logs(user_id);
      CREATE INDEX IF NOT EXISTS idx_audit_resource ON audit_logs(resource, resource_id);
      CREATE INDEX IF NOT EXISTS idx_audit_time     ON audit_logs(timestamp);
    `);

    console.log('[EpiConecta] Migrações executadas com sucesso no PostgreSQL.');
  } catch (err) {
    console.error('[EpiConecta Error] Erro ao executar migrações no PostgreSQL:', err.message);
    throw err;
  }
}

module.exports = { runMigrations };
