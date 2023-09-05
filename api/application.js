'use strict';

const express = require('express');
const apiRouter = require('./routers/apiRouter');

const app = express();

app.get('/health', (req, res) => {
  return res.status(200).json({application: 'Express-Boilerplate', status: 'OK'});
});

require('./middleware').init(app);

app.use('/api', apiRouter);

module.exports = app;
