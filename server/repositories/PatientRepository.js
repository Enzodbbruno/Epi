'use strict';
const db = require('../config/database');

class PatientRepository {
  async findById(id) {
    const res = await db.query('SELECT * FROM patients WHERE id = $1', [id]);
    return res.rows[0];
  }

  async listRecent(limit = 10) {
    const res = await db.query('SELECT * FROM patients ORDER BY created_at DESC LIMIT $1', [limit]);
    return res.rows;
  }

  async findByCpfHash(cpfHash) {
    const res = await db.query('SELECT * FROM patients WHERE cpf_hash = $1', [cpfHash]);
    return res.rows[0];
  }

  async findByCns(cns) {
    const clean = cns.replace(/\s/g, '');
    const res = await db.query("SELECT * FROM patients WHERE REPLACE(cns,' ','') = $1", [clean]);
    return res.rows[0];
  }

  /**
   * Full-text search por nome (parcial), CNS ou CPF hash.
   * Retorna no máximo `limit` resultados (default 10).
   */
  async search({ term, cpfHash, limit = 10 }) {
    const results = new Map();

    // Busca por CPF (exata, criptografada)
    if (cpfHash) {
      const res = await db.query('SELECT * FROM patients WHERE cpf_hash = $1', [cpfHash]);
      const r = res.rows[0];
      if (r) results.set(r.id, r);
    }

    // Busca por CNS ou Nome
    if (term) {
      const cleanTerm = term.replace(/\s/g, '');
      const byCnsRes = await db.query("SELECT * FROM patients WHERE REPLACE(cns,' ','') LIKE $1 LIMIT $2", [`%${cleanTerm}%`, limit]);
      byCnsRes.rows.forEach(r => results.set(r.id, r));

      // Busca por nome (case-insensitive via ILIKE)
      const byNameRes = await db.query('SELECT * FROM patients WHERE name ILIKE $1 LIMIT $2', [`%${term}%`, limit]);
      byNameRes.rows.forEach(r => results.set(r.id, r));
    }

    return Array.from(results.values()).slice(0, limit);
  }

  async create(data) {
    await db.query(`
      INSERT INTO patients
        (id, name, cpf_hash, cpf_encrypted, cns, birth_date, mother_name, sex, race,
         blood_type, education, zone, address, neighborhood, municipality, uf,
         phone_encrypted, conditions, allergies, vaccines, created_by)
      VALUES
        ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20, $21)
    `, [
      data.id,
      data.name,
      data.cpfHash,
      data.cpfEncrypted,
      data.cns,
      data.birthDate,
      data.motherName,
      data.sex,
      data.race,
      data.bloodType,
      data.education,
      data.zone,
      data.address,
      data.neighborhood,
      data.municipality,
      data.uf,
      data.phoneEncrypted,
      data.conditions,
      data.allergies,
      data.vaccines,
      data.createdBy
    ]);
  }

  async update(id, data) {
    const keys = Object.keys(data);
    const setClause = keys.map((key, i) => `${key} = $${i + 1}`).join(', ');
    const queryText = `UPDATE patients SET ${setClause}, updated_at = CURRENT_TIMESTAMP WHERE id = $${keys.length + 1}`;
    const values = [...keys.map(k => data[k]), id];
    await db.query(queryText, values);
  }

  async count() {
    const res = await db.query('SELECT COUNT(*) as total FROM patients');
    return parseInt(res.rows[0].total, 10);
  }
}

module.exports = new PatientRepository();
