import Validator from '../../src/utils/Validator.js';

const acceptsWholeNumbersOnly = (methodToTest: (value: string) => boolean) => {
  test('Does not contain special characters', () => {
    expect(methodToTest('$!<>?/\\\':=+-)(\`~')).toBe(false);
  });

  test('Does not contain letters', () => {
    expect(methodToTest('abcdefghijklmnopqrstuvwxyz')).toBe(false);
    expect(methodToTest('ABCDEFGHIJKLMNOPQRSTUVWXYZ')).toBe(false);
  });

  test('Is not negative', () => {
    expect(methodToTest('-1')).toBe(false);
  });

  test('Is not a decimal', () => {
    expect(methodToTest('0.5')).toBe(false);
  });

  test('Does not contain leading zeros', () => {
    expect(methodToTest('001')).toBe(false);
  });
};

describe('Validator', () => {
  describe('isWholeNumber', () => {
    acceptsWholeNumbersOnly(Validator.isWholeNumber);

    test('Is a valid whole number', () => {
      expect(Validator.isWholeNumber('0')).toBe(true);
      expect(Validator.isWholeNumber('312')).toBe(true);
    });
  });

  describe('isValidMonthNumber', () => {
    acceptsWholeNumbersOnly(Validator.isValidMonthNumber);

    test('Is a valid month number', () => {
      expect(Validator.isValidMonthNumber('12')).toBe(true);
      expect(Validator.isValidMonthNumber('1')).toBe(true);
      expect(Validator.isValidMonthNumber('0')).toBe(false);
      expect(Validator.isValidMonthNumber('13')).toBe(false);
    })
  });

  describe('isValidYearNumber', () => {
    acceptsWholeNumbersOnly(Validator.isValidYearNumber);

    test('Is a valid year number', () => {
      expect(Validator.isValidYearNumber('1900')).toBe(true);
      expect(Validator.isValidYearNumber('1999')).toBe(true);
      expect(Validator.isValidYearNumber('2000')).toBe(true);
      expect(Validator.isValidYearNumber('2099')).toBe(true);

      expect(Validator.isValidYearNumber('1899')).toBe(false);
      expect(Validator.isValidYearNumber('2100')).toBe(false);
    })
  });
});
