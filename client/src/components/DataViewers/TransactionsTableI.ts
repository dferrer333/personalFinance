import TransactionRequesterI from
    '../../api/TransactionsRequesterI';

export interface TransactionsDate {
  month: number,
  year: number,
}
export interface TransactionsTableProps {
  accountType: 'credit' | 'checking' | 'savings',
  transactionsDate: TransactionsDate,
  transactionsRequester: TransactionRequesterI,
};
export interface CreditTransaction {
  Date: string,
  Type: string,
  Category: string,
  From: string,
  To: string,
  Description: string,
  Amount: string,
}
export interface TransactionsTableState {
  creditTransactions: CreditTransaction[],
}
