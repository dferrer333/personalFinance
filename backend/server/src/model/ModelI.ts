type TransactionRequest = (month: number, year: number) => object[];

export default interface ModelI {
  requestCreditTransactions: TransactionRequest,
  requestSavingsTransactions: TransactionRequest,
  requestCheckingTransactions: TransactionRequest,
}
