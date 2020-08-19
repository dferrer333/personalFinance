require('dotenv').config();

import express from 'express';
const server = express();

server.use('/api/transactions', require('./routes/transactions.js'));

const publicPath = process.env.PUBLIC_PATH;
if (publicPath === undefined) {
  throw new TypeError('Error: process.env.PUBLIC_PATH is undefined.');
}
server.use(express.static(publicPath));
server.get('/*', (request, response) => {
  response.sendFile(publicPath + '/index.html');
});

const port = process.env.HOST_PORT;
server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
