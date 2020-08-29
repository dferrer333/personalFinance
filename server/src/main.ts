import CSVModel from './model/CSVModel';
import Logger from './utils/Logger';
import Server from './Server';

require('dotenv').config();


function initializeServer(): void {
  const port: number = getHostPort();
  const logger = new Logger();
  const model = new CSVModel();
  const server = new Server(logger, model, port);

  const [certificatePath, keyPath] = getHTTPSPaths();
  server.start(certificatePath, keyPath);
}

function getHostPort(): number {
  if (process.env.HOST_PORT === undefined) {
    throw getEnvNotSetError('you must set the host port in the' +
        ' root ".env" file.');
  }

  const hostPort = parseInt(process.env.HOST_PORT);
  if (hostPort !== 3000 && hostPort !== 8000) {
    const valueError = new Error('host port must be 3000 or 8000');
    valueError.name = 'ValueError';
    throw valueError;
  }

  return hostPort;
}

function getHTTPSPaths() {
  if (process.env.HTTPS_PATH === undefined) {
    throw getEnvNotSetError('you must set the path to the "https" folder');
  }

  const httpsPath = process.env.HTTPS_PATH;
  return [`${httpsPath}/certificate.pem`, `${httpsPath}/key.pem`];
}

function getEnvNotSetError(message: string) {
  const envNotSetError = new Error(message);
  envNotSetError.name = 'EnvNotSetError';
  return envNotSetError;
}

initializeServer();
