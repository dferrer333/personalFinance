export default class Validator {
  static isWholeNumber(value: string): boolean {
    return value.search(/^[0-9]+$/) >= 0;
  }

  static isValidMonthNumber(value: string): boolean {
    return value.search(/^[1-9]$|^1[0-2]$/) >= 0;
  }

  static isValidYearNumber(value: string): boolean {
    return value.search(/^19[0-9]{2}$|^20[0-9]{2}$/) >= 0;
  }
}
