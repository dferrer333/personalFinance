import DateUtilities, {MonthError, YearError} from '../utils/DateUtilities';
import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TransactionsRequesterI from '../api/TransactionsRequesterI';
import Paper from '@material-ui/core/Paper';

type AccountType = 'credit' | 'checking' | 'savings';
interface TransactionsDate {
  month: number,
  year: number,
}
interface TransactionsTableProps {
  accountType: AccountType,
  transactionsDate: TransactionsDate,
  transactionsRequester: TransactionsRequesterI,
};
interface CreditTransaction {
  Date: string,
  Type: string,
  Category: string,
  From: string,
  To: string,
  Description: string,
  Amount: string,
}
interface TransactionsTableState {
  creditTransactions: CreditTransaction[],
}

export default class TransactionsTable extends
    React.Component<TransactionsTableProps, TransactionsTableState> {
  accountTitle: string;
  transactionsDate: TransactionsDate;

  constructor(props: TransactionsTableProps) {
    super(props);

    this.accountTitle =
        `${props.accountType[0].toUpperCase() + props.accountType.slice(1)}` +
            ` Account`;

    this.validateDates(props.transactionsDate);
    this.transactionsDate = {
      month: props.transactionsDate.month,
      year: props.transactionsDate.year,
    };

    this.state = {
      creditTransactions: [],
    };

    this.requestCreditTransactions = this.requestCreditTransactions.bind(this);
    this.getTransactionsTableBody = this.getTransactionsTableBody.bind(this);
  }

  validateDates(transactionsDate: TransactionsDate): void {
    if (DateUtilities.validateMonth(transactionsDate.month) !== true) {
      throw new MonthError(transactionsDate.month);
    } else if (DateUtilities.validateYear(transactionsDate.year) !== true) {
      throw new YearError(transactionsDate.year);
    }
  }

  render() {
    return <Paper>
      <h1>
        {
          `${this.accountTitle} - ${this.transactionsDate.month}` +
          ` ${this.transactionsDate.year}`
        }
      </h1>
      <button
        onClick={this.requestCreditTransactions}
      >
        Click for Transactions
      </button>
      <TableContainer component={Paper} >
        <Table>
          <TableHead>
            <TableRow>
            <TableCell>Date:</TableCell>
            <TableCell>Type:</TableCell>
            <TableCell>Category:</TableCell>
            <TableCell>From:</TableCell>
            <TableCell>To:</TableCell>
            <TableCell>Description:</TableCell>
            <TableCell>Amount:</TableCell>
            </TableRow>
          </TableHead>
          {this.getTransactionsTableBody()}
        </Table>
      </TableContainer>
    </Paper>;
  }

  requestCreditTransactions(): void {
    this.props.transactionsRequester.requestCreditTransactions(1, 2020)
        .then((transactions: CreditTransaction[]) => {
          this.setState({creditTransactions: transactions});
        });
  }

  getTransactionsTableBody(): JSX.Element {
    return <TableBody>
      {
        this.state.creditTransactions.map((transaction: CreditTransaction) => {
          return <TableRow key={transaction.Date + ' ' + transaction.Amount}>
            <TableCell>{transaction.Date}</TableCell>
            <TableCell>{transaction.Type}</TableCell>
            <TableCell>{transaction.Category}</TableCell>
            <TableCell>{transaction.From}</TableCell>
            <TableCell>{transaction.To}</TableCell>
            <TableCell>{transaction.Description}</TableCell>
            <TableCell>{transaction.Amount}</TableCell>
          </TableRow>
        })
      }
    </TableBody>;
  }
}
