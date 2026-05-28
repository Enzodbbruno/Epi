'use strict';
const db = require('../config/database');

class PatientRepository {
  findById(id) {
    return db.prepare('SELECT * FROM patients WHERE id = ?').get(id);
  }

  listRecent(limit = 10) {
    return db.prepare('SELECT * FROM patients ORDER BY created_at DESC LIMIT ?').all(limit);
  }

  findByCpfHash(cpfHash) {
    return db.prepare('SELECT * FROM patients WHERE cpf_hash = ?').get(cpfHash);
  }

  findByCns(cns) {
    const clean = cns.replace(/\s/g, '');
    return db.prepare("SELECT * FROM patients WHERE REPLACE(cns,' ','') = ?").get(clean);
  }

  /**
   * Full-text search por nome (parcial), CNS ou CPF hash.
   * Retorna no máximo `limit` resultados (default 10).
   */
  search({ term, cpfHash, limit = 10 }) {
    const results = new Map();

    // Busca por CPF (exata, criptografada)
    if (cpfHash) {
      const r = db.prepare('SELECT * FROM patients WHERE cpf_hash = ?').get(cpfHash);
      if (r) results.set(r.id, r);
    }

    // Busca por CNS
    if (term) {
      const cleanTerm = term.replace(/\s/g, '');
      const byCns = db.prepare("SELECT * FROM patients WHERE REPLACE(cns,' ','') LIKE ? LIMIT ?")
                      .all(`%${cleanTerm}%`, limit);
      byCns.forEach(r => results.set(r.id, r));

      // Busca por nome (case-insensitive)
      const byName = db.prepare('SELECT * FROM patients WHERE name LIKE ? LIMIT ?')
                       .all(`%${term}%`, limit);
      byName.forEach(r => results.set(r.id, r));
    }

    return Array.from(results.values()).slice(0, limit);
  }

  create(data) {
    return db.prepare(`
      INSERT INTO patients
        (id, name, cpf_hash, cpf_encrypted, cns, birth_date, mother_name, sex, race,
         blood_type, education, zone, address, neighborhood, municipality, uf,
         phone_encrypted, conditions, allergies, vaccines, created_by)
      VALUES
        (@id,@name,@cpfHash,@cpfEncrypted,@cns,@birthDate,@motherName,@sex,@race,
         @bloodType,@education,@zone,@address,@neighborhood,@municipality,@uf,
         @phoneEncrypted,@conditions,@allergies,@vaccines,@createdBy)
    `).run(data);
  }

  update(id, data) {
    const fields = Object.keys(data)
      .map(k => `${k} = @${k}`)
      .join(', ');
    return db.prepare(`UPDATE patients SET ${fields}, updated_at = datetime('now') WHERE id = @id`)
             .run({ ...data, id });
  }

  count() {
    return db.prepare('SELECT COUNT(*) as total FROM patients').get().total;
  }
}

module.exports = new PatientRepository();
