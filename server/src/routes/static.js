"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var router = express_1.default.Router();
var publicPath = process.env.PUBLIC_PATH;
if (publicPath === undefined) {
    throw new TypeError('Error: process.env.PUBLIC_PATH is undefined.');
}
router.use(express_1.default.static(publicPath));
router.get('/*', function (request, response) {
    response.sendFile(publicPath + '/index.html');
});
module.exports = router;
