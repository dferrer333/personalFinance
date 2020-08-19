import express from 'express';
import fs from 'fs';

const router = express.Router();

router.get('/credit/:month/:year',
    (request: express.Request, response: express.Response) => {
  console.log(request.params.month, request.params.year);
  response.send(`Month: ${request.params.month}, Year: ${request.params.year}`);
});

module.exports = router;
