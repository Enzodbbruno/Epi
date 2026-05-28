'use strict';

const ROLE_HIERARCHY = {
  admin:      4,
  medico:     3,
  enfermeiro: 2,
  agente:     1,
  visitante:  0,
};

/**
 * RBAC middleware factory.
 * Usage: router.get('/...', authenticate, authorize('medico'), handler)
 * Allows users with role >= required.
 */
function authorize(...allowedRoles) {
  return (req, res, next) => {
    const userLevel     = ROLE_HIERARCHY[req.user?.role] ?? -1;
    const requiredLevel = Math.min(...allowedRoles.map(r => ROLE_HIERARCHY[r] ?? 99));

    if (userLevel < requiredLevel) {
      return res.status(403).json({
        error: `Acesso negado. Perfil necessário: ${allowedRoles.join(' ou ')}.`
      });
    }
    next();
  };
}

module.exports = authorize;
