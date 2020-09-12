import LoginPage from './components/Login/LoginPage';
import React from 'react';
import TransactionsRequester from './api/TransactionsRequester';

import './App.css';

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
      <div id='App'>
        {this.renderLoginPage()}
      </div>
    );
  }

  renderLoginPage() {
    return <LoginPage />;
  }
}

export default App;
