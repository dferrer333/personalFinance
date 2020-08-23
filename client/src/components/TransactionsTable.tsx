import DateUtilities, {MonthError, YearError} from '../utils/DateUtilities';
import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

type AccountType = 'credit' | 'checking' | 'savings';

interface TransactionsDate {
  month: number,
  year: number,
}

interface TransactionsTableProps {
  accountType: AccountType,
  transactionsDate: TransactionsDate,
};

export default class TransactionsTable extends
    React.Component<TransactionsTableProps, {}> {
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
    </Paper>;
  }
}
