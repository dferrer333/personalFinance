import express = require('express');

const server = express();
const port = 3000;

server.get('/helloWorld', (request, response) => {
  response.send('hello world!');
});

server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
