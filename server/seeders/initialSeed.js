'use strict';
const db      = require('../config/database');
const bcrypt  = require('bcryptjs');
const { randomUUID } = require('crypto');
const { encrypt, hashIndex } = require('../config/crypto');
require('dotenv').config();

async function seed() {
  try {
    // Verifica se já existe admin e se as credenciais estão corretas
    const existsRes = await db.query('SELECT id, cpf_hash, password_hash FROM users WHERE role = $1', ['admin']);
    const exists = existsRes.rows[0];

    const passwordHash = await bcrypt.hash(process.env.ADMIN_PASSWORD || 'EpiConecta@2025!', 12);
    const cpfRaw = process.env.ADMIN_CPF || '000.000.000-00';
    const currentCpfHash = hashIndex(cpfRaw);

    if (exists) {
      const passMatch = await bcrypt.compare(process.env.ADMIN_PASSWORD || 'EpiConecta@2025!', exists.password_hash);
      if (exists.cpf_hash !== currentCpfHash || !passMatch) {
        console.log('[Seed] Admin existe mas com credenciais desatualizadas. Atualizando...');
        await db.query(`
          UPDATE users 
          SET cpf_hash = $1, cpf_encrypted = $2, password_hash = $3
          WHERE id = $4
        `, [
          currentCpfHash,
          encrypt(cpfRaw),
          passwordHash,
          exists.id
        ]);
      } else {
        console.log('[Seed] Admin já existe com credenciais corretas. Pulando.');
      }
    } else {
      console.log('[Seed] Criando administrador...');
      await db.query(`
        INSERT INTO users (id, name, cpf_hash, cpf_encrypted, role, password_hash, health_center)
        VALUES ($1, $2, $3, $4, 'admin', $5, 'Secretaria Municipal de Saúde')
      `, [
        randomUUID(),
        process.env.ADMIN_NAME || 'Administrador EpiConecta',
        currentCpfHash,
        encrypt(cpfRaw),
        passwordHash
      ]);
    }

    // Seeda pacientes de exemplo (espelha o mockDB do frontend)
    const samplePatients = [
      { name:'Maria da Silva Santos', cpf:'123.456.789-00', cns:'123 4567 8901 2345', birthDate:'1982-05-15', motherName:'Raimunda Ferreira da Silva', sex:'F', race:'Parda', education:'Ensino Médio Completo', zone:'Urbana', address:'Rua das Palmeiras, 234', neighborhood:'Cidade Nova', municipality:'Marabá', uf:'PA', phone:'(94) 99123-4567', bloodType:'O+' },
      { name:'João Pedro Oliveira', cpf:'987.654.321-00', cns:'987 6543 2109 8765', birthDate:'1989-08-22', motherName:'Francisca Oliveira dos Santos', sex:'M', race:'Branca', education:'Ensino Superior Completo', zone:'Urbana', address:'Av. Marechal Rondon, 891', neighborhood:'Nova Marabá', municipality:'Marabá', uf:'PA', phone:'(94) 98765-4321', bloodType:'A+' },
      { name:'Ana Carolina Ferreira', cpf:'456.789.123-45', cns:'456 7891 2345 6789', birthDate:'1996-12-10', motherName:'Luciana Ferreira Alves', sex:'F', race:'Parda', education:'Ensino Superior Incompleto', zone:'Urbana', address:'Rua Onze de Maio, 55', neighborhood:'Novo Horizonte', municipality:'Marabá', uf:'PA', phone:'(94) 99321-7654', bloodType:'B+' },
      { name:'Carlos Eduardo Souza', cpf:'321.654.987-12', cns:'321 6549 8712 3456', birthDate:'1966-03-03', motherName:'Dalva Souza dos Reis', sex:'M', race:'Branca', education:'Ensino Médio Completo', zone:'Urbana', address:'Rua Quintino Bocaiuva, 312', neighborhood:'São Félix', municipality:'Marabá', uf:'PA', phone:'(94) 99456-1230', bloodType:'AB+' },
      { name:'Juliana Alves Costa', cpf:'159.753.486-20', cns:'159 7534 8620 1597', birthDate:'1993-07-18', motherName:'Sandra Costa Pereira', sex:'F', race:'Negra', education:'Ensino Médio Completo', zone:'Urbana', address:'Rua Sete de Setembro, 78', neighborhood:'Liberdade', municipality:'Marabá', uf:'PA', phone:'(94) 98234-5678', bloodType:'O-' },
      { name:'Roberto Lima Mendes', cpf:'753.951.852-33', cns:'753 9518 5233 7539', birthDate:'1957-01-25', motherName:'Maria do Carmo Lima', sex:'M', race:'Parda', education:'Ensino Fundamental Incompleto', zone:'Urbana', address:'Travessa Três, 190', neighborhood:'Morada Nova', municipality:'Marabá', uf:'PA', phone:'(94) 99678-0011', bloodType:'A-' },
      { name:'Fernanda Rocha Silva', cpf:'258.147.369-11', cns:'258 1473 6911 2581', birthDate:'1999-03-12', motherName:'Patrícia Rocha Pinto', sex:'F', race:'Parda', education:'Ensino Médio Completo', zone:'Urbana', address:'Rua Floresta, 440', neighborhood:'Bela Vista', municipality:'Marabá', uf:'PA', phone:'(94) 99012-3344', bloodType:'O+' },
      { name:'Ricardo Gomes Pereira', cpf:'369.258.147-22', cns:'369 2581 4722 3692', birthDate:'1980-09-05', motherName:'Terezinha Gomes da Silva', sex:'M', race:'Branca', education:'Ensino Médio Incompleto', zone:'Periurbana', address:'Rua Cachoeira, 62', neighborhood:'Amapá', municipality:'Marabá', uf:'PA', phone:'(94) 98899-0022', bloodType:'B-' },
      { name:'Camila Santos Oliveira', cpf:'741.852.963-33', cns:'741 8529 6333 7418', birthDate:'2017-07-15', motherName:'Adriana Santos Costa', sex:'F', race:'Parda', education:'Não se aplica', zone:'Urbana', address:'Rua Girassol, 150', neighborhood:'Sol Nascente', municipality:'Marabá', uf:'PA', phone:'(94) 98765-9988', bloodType:'A+' },
      { name:'Luiz Fernando Souza', cpf:'852.963.741-44', cns:'852 9637 4144 8529', birthDate:'1970-02-28', motherName:'Conceição Araújo Souza', sex:'M', race:'Parda', education:'Ensino Superior Completo', zone:'Urbana', address:'Av. Brasil, 1.200', neighborhood:'Centro', municipality:'Marabá', uf:'PA', phone:'(94) 99111-2233', bloodType:'AB-' },
      { name:'Beatriz Costa Lima', cpf:'963.741.852-55', cns:'963 7418 5255 9637', birthDate:'2006-10-10', motherName:'Vanessa Lima Costa', sex:'F', race:'Amarela', education:'Ensino Médio Incompleto', zone:'Urbana', address:'Rua das Acácias, 88', neighborhood:'Jardim Paraíso', municipality:'Marabá', uf:'PA', phone:'(94) 99444-5566', bloodType:'O+' },
    ];

    for (const p of samplePatients) {
      await db.query(`
        INSERT INTO patients
          (id, name, cpf_hash, cpf_encrypted, cns, birth_date, mother_name, sex, race,
           blood_type, education, zone, address, neighborhood, municipality, uf, phone_encrypted)
        VALUES
          ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17)
        ON CONFLICT (cns) DO NOTHING
      `, [
        randomUUID(),
        p.name,
        hashIndex(p.cpf),
        encrypt(p.cpf),
        p.cns,
        p.birthDate,
        p.motherName,
        p.sex,
        p.race,
        p.bloodType,
        p.education,
        p.zone,
        p.address,
        p.neighborhood,
        p.municipality,
        p.uf,
        encrypt(p.phone)
      ]);
    }

    console.log('[Seed] Admin e pacientes de exemplo criados com sucesso.');
  } catch (err) {
    console.error('[Seed Error] Falha ao seedar dados no PostgreSQL:', err.message);
    throw err;
  }
}

module.exports = { seed };
