require('dotenv').config();

import express from 'express';
const server = express();

server.use('/api/transactions', require('./routes/transactions'));
server.use(require('./routes/static'));

const port = process.env.HOST_PORT;
server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
