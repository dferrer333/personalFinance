import ModelI from './ModelI';

export default class CSVModel implements ModelI {
  requestCreditTransactions(month: number, year: number) {
    throw new Error('Not Implemented!');
    return [{}];
  }

  requestSavingsTransactions(month: number, year: number) {
    throw new Error('Not Implemented!');
    return [{}];
  }

  requestCheckingTransactions(month: number, year: number) {
    throw new Error('Not Implemented!');
    return [{}];
  }
}
