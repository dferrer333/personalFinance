"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require('dotenv').config();
var express_1 = __importDefault(require("express"));
var server = express_1.default();
server.use('/api/transactions', require('./routes/transactions.js'));
var publicPath = process.env.PUBLIC_PATH;
if (publicPath === undefined) {
    throw new TypeError('Error: process.env.PUBLIC_PATH is undefined.');
}
server.use(express_1.default.static(publicPath));
server.get('/*', function (request, response) {
    response.sendFile(publicPath + '/index.html');
});
var port = process.env.HOST_PORT;
server.listen(port, function () {
    console.log("Server listening on port " + port);
});
