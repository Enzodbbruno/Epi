'use strict';
const router  = require('express').Router();
const ctrl    = require('../controllers/AuthController');
const auth    = require('../middlewares/authenticate');
const authz   = require('../middlewares/authorize');
const { authLimiter } = require('../middlewares/rateLimiter');

router.post('/login',   authLimiter, ctrl.login.bind(ctrl));
router.post('/refresh',              ctrl.refresh.bind(ctrl));
router.post('/logout',  auth,        ctrl.logout.bind(ctrl));
router.get( '/me',      auth,        ctrl.me.bind(ctrl));

// Criar usuário — apenas admin
router.post('/users', auth, authz('admin'), ctrl.createUser.bind(ctrl));

module.exports = router;
