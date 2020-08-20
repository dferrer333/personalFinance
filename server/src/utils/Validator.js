"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Validator = /** @class */ (function () {
    function Validator() {
    }
    Validator.isWholeNumber = function (value) {
        return value.search(/^0$|^[1-9][0-9]*$/) >= 0;
    };
    Validator.isValidMonthNumber = function (value) {
        return value.search(/^[1-9]$|^1[0-2]$/) >= 0;
    };
    Validator.isValidYearNumber = function (value) {
        return value.search(/^19[0-9]{2}$|^20[0-9]{2}$/) >= 0;
    };
    return Validator;
}());
exports.default = Validator;
