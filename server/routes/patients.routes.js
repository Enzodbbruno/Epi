'use strict';
const router = require('express').Router();
const ctrl   = require('../controllers/PatientController');
const auth   = require('../middlewares/authenticate');
const authz  = require('../middlewares/authorize');

// Todos os endpoints requerem autenticação
router.use(auth);

router.get('/',    authz('agente'), ctrl.search.bind(ctrl));   // GET /patients?q=Maria
router.get('/:id', authz('agente'), ctrl.getById.bind(ctrl));  // GET /patients/:id
router.post('/',   authz('agente'), ctrl.create.bind(ctrl));   // POST /patients

module.exports = router;
