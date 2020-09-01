import ActionPanel from './components/ActionPanel';
import Box from '@material-ui/core/Box';
import React from 'react';
import TransactionsRequester from './api/TransactionsRequester';
import ViewPanel from './components/ViewPanel';


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
      <Box width={'100vw'} height={'100vh'}
           display={'flex'} flexDirection={'row'} padding={0} margin={0}
           id={'App'}>
        <ActionPanel />
        <ViewPanel />
      </Box>
    );
  }
}

export default App;
