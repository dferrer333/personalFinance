import CSVModel from './model/CSVModel';
import Logger from './utils/Logger';
import Server from './Server';

require('dotenv').config();


function initializeServer(): void {
  const port: number = getHostPort();
  const logger = new Logger();
  const model = new CSVModel();
  const server = new Server(logger, model, port);

  server.start();
}

function getHostPort(): number {
  if (process.env.HOST_PORT === undefined) {
    const portNotSetError = new Error('you must set the host port in the' +
        ' root ".env" file.');
    portNotSetError.name = 'PortNotSetError';
    throw portNotSetError;
  }

  const hostPort = parseInt(process.env.HOST_PORT);
  if (hostPort !== 3000 && hostPort !== 8000) {
    const valueError = new Error('host port must be 3000 or 8000');
    valueError.name = 'ValueError';
    throw valueError;
  }

  return hostPort;
}

initializeServer();
