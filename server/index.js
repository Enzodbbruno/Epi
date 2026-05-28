'use strict';
require('dotenv').config({ path: require('path').resolve(__dirname, '.env') });

const express = require('express');
const helmet  = require('helmet');
const cors    = require('cors');
const morgan  = require('morgan');
const path    = require('path');

const { runMigrations } = require('./migrations/schema');
const { seed }          = require('./seeders/initialSeed');
const { apiLimiter }    = require('./middlewares/rateLimiter');

// ── Routes ────────────────────────────────────────────
const authRoutes   = require('./routes/auth.routes');
const patientRoutes = require('./routes/patients.routes');
const notifRoutes  = require('./routes/notifications.routes');

const app  = express();
const PORT = process.env.PORT || 3001;

// ── Security Headers ──────────────────────────────────
app.use(helmet({
  contentSecurityPolicy: false, // disabled for now; enable in production with full config
}));

// ── CORS ──────────────────────────────────────────────
const allowedOrigins = (process.env.ALLOWED_ORIGINS || 'http://localhost:5500,http://127.0.0.1:5500,http://localhost:5501,http://127.0.0.1:5501')
  .split(',').map(o => o.trim());

app.use(cors({
  origin: (origin, callback) => {
    // Permitir requisições sem origem (como aplicativos locais, mobile wrapper, curl ou Postman)
    if (!origin) return callback(null, true);
    
    // Regra Corporativa: Em desenvolvimento (NODE_ENV !== 'production'), aceitamos localhost em qualquer porta
    // e IPs privados de redes locais convencionais (ex: 192.168.x.x, 10.x.x.x)
    const isDevelopment = process.env.NODE_ENV !== 'production';
    const isLocalhostOrPrivateIP = 
      origin.startsWith('http://localhost') || 
      origin.startsWith('http://127.0.0.1') ||
      origin.match(/^http:\/\/192\.168\.\d+\.\d+/) ||
      origin.match(/^http:\/\/10\.\d+\.\d+\.\d+/);

    if (isDevelopment || isLocalhostOrPrivateIP || allowedOrigins.includes(origin)) {
      return callback(null, true);
    }
    
    callback(new Error(`CORS bloqueado: origem ${origin} não autorizada.`));
  },
  methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true,
}));

// ── Body Parser ───────────────────────────────────────
app.use(express.json({ limit: '1mb' }));

// ── Request Logging ───────────────────────────────────
app.use(morgan(process.env.NODE_ENV === 'production' ? 'combined' : 'dev'));

// ── Global Rate Limiter ───────────────────────────────
app.use('/api/', apiLimiter);

let dbInitPromise = null;

async function ensureDbInitialized() {
  if (!dbInitPromise) {
    dbInitPromise = (async () => {
      console.log('[EpiConecta] Inicializando banco de dados...');
      await runMigrations();
      await seed();
      console.log('[EpiConecta] Banco de dados inicializado com sucesso.');
    })();
  }
  return dbInitPromise;
}

// ── Db Initialization Middleware ──────────────────────
app.use(async (req, res, next) => {
  try {
    await ensureDbInitialized();
    next();
  } catch (err) {
    console.error('[EpiConecta Initialization Error]', err);
    res.status(500).json({ error: `Falha na inicialização do servidor: ${err.message}` });
  }
});

// ── API Routes ────────────────────────────────────────
app.use('/api/v1/auth',          authRoutes);
app.use('/api/v1/patients',      patientRoutes);
app.use('/api/v1/notifications', notifRoutes);

// ── Health Check ──────────────────────────────────────
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString(), version: '1.0.0' });
});

// ── Serve Frontend (static) ───────────────────────────
// Em produção, o servidor também serve o frontend
const frontendPath = path.join(__dirname, '..');
app.use(express.static(frontendPath));
app.get('/{*path}', (req, res) => {
  res.sendFile(path.join(frontendPath, 'index.html'));
});

// ── Global Error Handler ──────────────────────────────
app.use((err, req, res, next) => { // eslint-disable-line no-unused-vars
  console.error('[EpiConecta Error]', err.message);
  res.status(err.status || 500).json({ error: err.message || 'Erro interno do servidor.' });
});

// ── Boot ──────────────────────────────────────────────
async function bootstrap() {
  try {
    if (process.env.NODE_ENV !== 'production' && !process.env.VERCEL) {
      await ensureDbInitialized();
      app.listen(PORT, () => {
        console.log('');
        console.log('  ╔═══════════════════════════════════════╗');
        console.log('  ║        EpiConecta  Backend v1.0       ║');
        console.log(`  ║  Servidor rodando em http://localhost:${PORT}  ║`);
        console.log('  ║  Banco: PostgreSQL                    ║');
        console.log('  ╚═══════════════════════════════════════╝');
        console.log('');
      });
    } else {
      console.log('[EpiConecta Serverless] Iniciado no Vercel.');
    }
  } catch (err) {
    console.error('[FATAL] Falha ao iniciar o servidor:', err);
    if (!process.env.VERCEL) {
      process.exit(1);
    }
  }
}

bootstrap();

module.exports = app;
