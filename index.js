'use strict';

const SERVER_PORT = 8000;

const initializeServer = async () => {
  console.log('Initializing server...');
  const app = require('./api/application');


  const Server = app.listen(SERVER_PORT, () => {
    console.log(`Server started and listening on port: ${SERVER_PORT}...`);
  });

  const logError = err => {
    console.error(err);
  };


  process.on('uncaughtException', logError);
  process.on('warning', logError);
  process.on('unhandledRejection', logError);
};

initializeServer();
