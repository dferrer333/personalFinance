"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require('dotenv').config();
var express = require("express");
var server = express();
server.get('/helloWorld', function (request, response) {
    response.send('hello world!');
});
var publicPath = process.env.PUBLIC_PATH;
if (publicPath === undefined) {
    throw new TypeError('Error: process.env.PUBLIC_PATH is undefined.');
}
server.use(express.static(publicPath));
server.get('/*', function (request, response) {
    response.sendFile(publicPath + '/index.html');
});
var port = process.env.HOST_PORT;
server.listen(port, function () {
    console.log("Server listening on port " + port);
});
