"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require('dotenv').config();
var express_1 = __importDefault(require("express"));
var server = express_1.default();
server.use('/api/transactions', require('./routes/transactions'));
server.use(require('./routes/static'));
var port = process.env.HOST_PORT;
server.listen(port, function () {
    console.log("Server listening on port " + port);
});
