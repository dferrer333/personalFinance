import TransactionsRequesterI from './TransactionsRequesterI';

export default class TransactionsRequester implements TransactionsRequesterI {
  transactionsApiBaseUrl: string;

  constructor(serverHostUrl: string) {
    this.transactionsApiBaseUrl = `${serverHostUrl}/api/transactions`;
  }

  async requestCreditTransactions(month: number, year: number): Promise<any> {
    const creditRequestUrl =
        `${this.transactionsApiBaseUrl}/credit/${month}/${year}`;
    const response =  await window.fetch(creditRequestUrl, {
      method: 'GET',
    });

    return response.json();
  }
}
