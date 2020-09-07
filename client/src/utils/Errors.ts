type EventValueType = 'number' | 'string';

export class EventValueError extends Error {
  constructor(desiredValueType: EventValueType, eventValue: any) {
    super(`event value should be of type ${desiredValueType}, yet actual ` +
        `was ${eventValue}`);
    this.name = 'EventValueError';
  }
}
