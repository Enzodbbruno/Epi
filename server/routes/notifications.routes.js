'use strict';
const router = require('express').Router();
const ctrl   = require('../controllers/NotificationController');
const auth   = require('../middlewares/authenticate');
const authz  = require('../middlewares/authorize');

router.use(auth);

router.post('/',        authz('agente'),   ctrl.create.bind(ctrl));
router.put('/:id',      authz('agente'),   ctrl.update.bind(ctrl));
router.get('/mine',     authz('agente'),   ctrl.listMine.bind(ctrl));
router.get('/recent',   authz('agente'),   ctrl.listRecent.bind(ctrl));
router.get('/stats',    authz('agente'),   ctrl.getStats.bind(ctrl));

module.exports = router;
