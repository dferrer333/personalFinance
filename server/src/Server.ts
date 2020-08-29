import express from 'express';
import LoggerI from './utils/LoggerI';
import ModelI from './model/ModelI';

export default class Server {
  logger: LoggerI;
  model: ModelI;
  port: number;
  server: express.Express;

  constructor(logger: LoggerI, model: ModelI, port: number) {
    this.logger = logger;
    this.model = model;
    this.port = port;
    this.server = express();
  }

  start(): void {
    this.server.use('/api/transactions', require('./routes/transactions'));
    this.server.use(require('./routes/static'));

    this.server.listen(this.port, () => {
      console.log(`Server listening on port ${this.port}`);
    });
  }
}
