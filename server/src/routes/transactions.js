"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var router = express_1.default.Router();
router.get('/credit/:month/:year', function (request, response) {
    console.log(request.params.month, request.params.year);
    response.send("Month: " + request.params.month + ", Year: " + request.params.year);
});
module.exports = router;
