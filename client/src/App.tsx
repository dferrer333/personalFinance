import React from 'react';
import TransactionsRequester from './api/TransactionsRequester';
import TransactionsTable from './components/TransactionsTable';


// type AppProps = React.Component<{serverHostUrl: string}, {}>;
interface AppProps {
  serverHostUrl: string,
}

class App extends React.Component<AppProps, {}> {
  transactionsRequester: TransactionsRequester;

  constructor(props: AppProps) {
    super(props);
    this.transactionsRequester =
        new TransactionsRequester(props.serverHostUrl);
  }

  render() {
    return (
      <div className="App">
        <TransactionsTable
          accountType={'credit'} transactionsDate={{month: 1, year: 2020}}
          transactionsRequester={this.transactionsRequester} />
      </div>
    );
  }
}

export default App;
