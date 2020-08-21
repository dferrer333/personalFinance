"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var fs_1 = __importDefault(require("fs"));
var csv_parse_1 = __importDefault(require("csv-parse"));
var Validator_js_1 = __importDefault(require("../utils/Validator.js"));
var router = express_1.default.Router();
router.get('/credit/:month/:year', function (request, response) {
    if (!Validator_js_1.default.isValidMonthNumber(request.params.month) ||
        !Validator_js_1.default.isValidYearNumber(request.params.year)) {
        response.status(400);
        response.send('Invalid parameters received.');
    }
    else {
        var absoluteFilePath = process.env.ROOT + "/data/credit/" +
            (request.params.month + "-" + request.params.year + ".csv");
        fs_1.default.readFile(absoluteFilePath, 'utf8', function (error, fileData) {
            if (error == undefined) {
                sendCSVArrayToClient(response, fileData);
            }
            else {
                response.status(400);
                response.send('Unable to locate file with the given parameters.');
            }
        });
    }
});
function sendCSVArrayToClient(response, csvData) {
    csv_parse_1.default(csvData, {
        columns: true,
        delimiter: ',',
        trim: true,
    }, function (error, output) {
        if (error != undefined) {
            response.status(500);
            response.send('Unable to parse the requested CSV data.');
        }
        else {
            response.json(output);
        }
    });
}
module.exports = router;
