"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var Validator_js_1 = __importDefault(require("../utils/Validator.js"));
var router = express_1.default.Router();
router.get('/credit/:month/:year', function (request, response) {
    if (!Validator_js_1.default.isValidMonthNumber(request.params.month) ||
        !Validator_js_1.default.isValidYearNumber(request.params.year)) {
        response.status(400);
        response.send('Invalid parameters received from the client.');
    }
    response.send("Month: " + request.params.month + ", Year: " + request.params.year);
});
module.exports = router;
