'use strict';
require('dotenv').config();
const crypto = require('crypto');

const ALGORITHM = 'aes-256-gcm';
const SECRET    = process.env.AES_SECRET || 'fallback_dev_secret_32bytes_____';
// Derive a 32-byte key from the secret
const KEY = crypto.scryptSync(SECRET, 'epiconecta_salt', 32);

/**
 * Encrypt sensitive PII (CPF, etc.) with AES-256-GCM.
 * Returns a base64 string: iv:authTag:ciphertext
 * @param {string} plaintext
 * @returns {string}
 */
function encrypt(plaintext) {
  if (!plaintext) return null;
  const iv        = crypto.randomBytes(16);
  const cipher    = crypto.createCipheriv(ALGORITHM, KEY, iv);
  let encrypted   = cipher.update(String(plaintext), 'utf8', 'hex');
  encrypted      += cipher.final('hex');
  const authTag   = cipher.getAuthTag().toString('hex');
  return `${iv.toString('hex')}:${authTag}:${encrypted}`;
}

/**
 * Decrypt a value previously encrypted by encrypt().
 * @param {string} encryptedStr
 * @returns {string|null}
 */
function decrypt(encryptedStr) {
  if (!encryptedStr) return null;
  try {
    const [ivHex, authTagHex, encrypted] = encryptedStr.split(':');
    const iv       = Buffer.from(ivHex, 'hex');
    const authTag  = Buffer.from(authTagHex, 'hex');
    const decipher = crypto.createDecipheriv(ALGORITHM, KEY, iv);
    decipher.setAuthTag(authTag);
    let decrypted  = decipher.update(encrypted, 'hex', 'utf8');
    decrypted     += decipher.final('utf8');
    return decrypted;
  } catch {
    return null;
  }
}

/**
 * One-way hash for indexing — allows exact lookups without exposing PII.
 * @param {string} value
 * @returns {string}
 */
function hashIndex(value) {
  if (!value) return null;
  return crypto
    .createHmac('sha256', KEY)
    .update(String(value).replace(/\D/g, '')) // strip formatting
    .digest('hex');
}

module.exports = { encrypt, decrypt, hashIndex };
