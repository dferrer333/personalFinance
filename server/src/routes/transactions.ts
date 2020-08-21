import express from 'express';
import fs from 'fs';
import parse from 'csv-parse';
import Validator from '../utils/Validator.js';

const router = express.Router();

router.get('/credit/:month/:year',
    (request: express.Request, response: express.Response) => {
  if (!Validator.isValidMonthNumber(request.params.month) ||
      !Validator.isValidYearNumber(request.params.year)) {
    response.status(400);
    response.send('Invalid parameters received.');
  } else {
    const absoluteFilePath = `${process.env.ROOT}/data/credit/` +
       `${request.params.month}-${request.params.year}.csv`;

    fs.readFile(absoluteFilePath, 'utf8', (error, fileData) => {
      if (error == undefined) {
        sendCSVArrayToClient(response, fileData);
      } else {
        response.status(400);
        response.send('Unable to locate file with the given parameters.');
      }
    });
  }
});

function sendCSVArrayToClient(response: express.Response, csvData: string) {
  parse(csvData, {
    columns: true,
    delimiter: ',',
    trim: true,
  }, (error, output) => {
    if (error != undefined) {
      response.status(500);
      response.send('Unable to parse the requested CSV data.');
    } else {
      response.json(output);
    }
  });
}

module.exports = router;
