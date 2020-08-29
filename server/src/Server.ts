import express from 'express';
import fs from 'fs';
import https from 'https';
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

  start(certificatePath: string, keyPath: string): void {
    this.server.use('/api/transactions', require('./routes/transactions'));
    this.server.use(require('./routes/static'));

    const httpsOptions = {
      cert: fs.readFileSync(certificatePath),
      key: fs.readFileSync(keyPath),
    }

    https.createServer(httpsOptions, this.server).listen(this.port, () => {
      console.log(`Server listening on port ${this.port}`);
    });
    // this.server.listen(this.port, () => {
    //   console.log(`Server listening on port ${this.port}`);
    // });
  }
}
