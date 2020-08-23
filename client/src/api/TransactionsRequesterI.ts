export default interface TransactionsRequesterI {
  transactionsApiBaseUrl: string,
  requestCreditTransactions: (month: number, year: number) => Promise<any>,
}
