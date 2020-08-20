import express from 'express';
import fs from 'fs';
import Validator from '../utils/Validator.js';

const router = express.Router();

router.get('/credit/:month/:year',
    (request: express.Request, response: express.Response) => {
  if (!Validator.isValidMonthNumber(request.params.month) ||
      !Validator.isValidYearNumber(request.params.year)) {
    response.status(400);
    response.send('Invalid parameters received from the client.');
  }
  response.send(`Month: ${request.params.month}, Year: ${request.params.year}`);
});

module.exports = router;
