let app;
let initError = null;

try {
  app = require('../server/index');
} catch (err) {
  initError = err;
}

module.exports = (req, res) => {
  if (initError) {
    res.setHeader('Content-Type', 'application/json');
    res.status(500).end(JSON.stringify({
      error: 'Falha crítica na importação do servidor (Require Error)',
      message: initError.message,
      stack: initError.stack
    }, null, 2));
    return;
  }
  app(req, res);
};
