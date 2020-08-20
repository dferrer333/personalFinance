"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Validator_js_1 = __importDefault(require("../../src/utils/Validator.js"));
var acceptsWholeNumbersOnly = function (methodToTest) {
    test('Does not contain special characters', function () {
        expect(methodToTest('$!<>?/\\\':=+-)(\`~')).toBe(false);
    });
    test('Does not contain letters', function () {
        expect(methodToTest('abcdefghijklmnopqrstuvwxyz')).toBe(false);
        expect(methodToTest('ABCDEFGHIJKLMNOPQRSTUVWXYZ')).toBe(false);
    });
    test('Is not negative', function () {
        expect(methodToTest('-1')).toBe(false);
    });
    test('Is not a decimal', function () {
        expect(methodToTest('0.5')).toBe(false);
    });
    test('Does not contain leading zeros', function () {
        expect(methodToTest('001')).toBe(false);
    });
};
describe('Validator', function () {
    describe('isWholeNumber', function () {
        acceptsWholeNumbersOnly(Validator_js_1.default.isWholeNumber);
        test('Is a valid whole number', function () {
            expect(Validator_js_1.default.isWholeNumber('0')).toBe(true);
            expect(Validator_js_1.default.isWholeNumber('312')).toBe(true);
        });
    });
    describe('isValidMonthNumber', function () {
        acceptsWholeNumbersOnly(Validator_js_1.default.isValidMonthNumber);
        test('Is a valid month number', function () {
            expect(Validator_js_1.default.isValidMonthNumber('12')).toBe(true);
            expect(Validator_js_1.default.isValidMonthNumber('1')).toBe(true);
            expect(Validator_js_1.default.isValidMonthNumber('0')).toBe(false);
            expect(Validator_js_1.default.isValidMonthNumber('13')).toBe(false);
        });
    });
    describe('isValidYearNumber', function () {
        acceptsWholeNumbersOnly(Validator_js_1.default.isValidYearNumber);
        test('Is a valid year number', function () {
            expect(Validator_js_1.default.isValidYearNumber('1900')).toBe(true);
            expect(Validator_js_1.default.isValidYearNumber('1999')).toBe(true);
            expect(Validator_js_1.default.isValidYearNumber('2000')).toBe(true);
            expect(Validator_js_1.default.isValidYearNumber('2099')).toBe(true);
            expect(Validator_js_1.default.isValidYearNumber('1899')).toBe(false);
            expect(Validator_js_1.default.isValidYearNumber('2100')).toBe(false);
        });
    });
});
