export class MonthError extends TypeError {
  constructor(month: number) {
    super(`Month as number ${month} is invalid.  Must be within 1-12.`);
    this.name = 'MonthError';
  }
}

export class YearError extends TypeError {
  constructor(year: number) {
    super(`Year as number ${year} is invalid.  Must be within 1700-2099.`);
  }
}

export default class DateUtilities {
  static validateMonth(month: number): boolean {
    return month > 0 && month < 13;
  }

  static validateYear(year: number): boolean {
    return year > 1699 && year < 2100;
  }

  static getMonthName(month: number): string {
    if (DateUtilities.validateMonth(month) !== true) {
      throw new MonthError(month);
    }

    const monthNames = ['January', 'February', 'March', 'April', 'May',
                        'June', 'July', 'August', 'September', 'October',
                        'November', 'December'];

    return monthNames[month-1];
  }
}
