import express from 'express';

const router = express.Router();

const publicPath = process.env.PUBLIC_PATH;
if (publicPath === undefined) {
  throw new TypeError('Error: process.env.PUBLIC_PATH is undefined.');
}
router.use(express.static(publicPath));
router.get('/*', (request, response) => {
  response.sendFile(publicPath + '/index.html');
});

module.exports = router;
