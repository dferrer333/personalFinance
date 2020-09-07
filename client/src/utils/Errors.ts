type EventValueType = 'number' | 'string';

export class EventValueError extends Error {
  constructor(desiredValueType: EventValueType, eventValue: any) {
    super(`event value should be of type ${desiredValueType}, yet actual ` +
        `was ${eventValue}`);
    this.name = 'EventValueError';
  }
}

export class ValueError extends Error {
  constructor(expectedValues: any[], receivedValue: any) {
    super(`invalid value of ${receivedValue}, expected one of the ` +
        `following: ${expectedValues.toString()}`);
    this.name = 'ValueError';
  }
}
