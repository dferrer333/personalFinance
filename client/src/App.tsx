import React from 'react';
import TransactionsTable from './components/TransactionsTable';

function App() {
  return (
    <div className="App">
      <TransactionsTable
        accountType={'credit'} transactionsDate={{month: 1, year: 2020}} />
    </div>
  );
}

export default App;
