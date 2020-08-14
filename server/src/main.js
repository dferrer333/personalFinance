"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var server = express();
var port = 3000;
server.get('/helloWorld', function (request, response) {
    response.send('hello world!');
});
server.listen(port, function () {
    console.log("Server listening on port " + port);
});
