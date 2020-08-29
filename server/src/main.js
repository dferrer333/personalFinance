"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var CSVModel_1 = __importDefault(require("./model/CSVModel"));
var Logger_1 = __importDefault(require("./utils/Logger"));
var Server_1 = __importDefault(require("./Server"));
require('dotenv').config();
function initializeServer() {
    var port = getHostPort();
    var logger = new Logger_1.default();
    var model = new CSVModel_1.default();
    var server = new Server_1.default(logger, model, port);
    var _a = getHTTPSPaths(), certificatePath = _a[0], keyPath = _a[1];
    server.start(certificatePath, keyPath);
}
function getHostPort() {
    if (process.env.HOST_PORT === undefined) {
        throw getEnvNotSetError('you must set the host port in the' +
            ' root ".env" file.');
    }
    var hostPort = parseInt(process.env.HOST_PORT);
    if (hostPort !== 3000 && hostPort !== 8000) {
        var valueError = new Error('host port must be 3000 or 8000');
        valueError.name = 'ValueError';
        throw valueError;
    }
    return hostPort;
}
function getHTTPSPaths() {
    if (process.env.HTTPS_PATH === undefined) {
        throw getEnvNotSetError('you must set the path to the "https" folder');
    }
    var httpsPath = process.env.HTTPS_PATH;
    return [httpsPath + "/certificate.pem", httpsPath + "/key.pem"];
}
function getEnvNotSetError(message) {
    var envNotSetError = new Error(message);
    envNotSetError.name = 'EnvNotSetError';
    return envNotSetError;
}
initializeServer();
