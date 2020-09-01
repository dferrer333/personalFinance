import {ActionPanelProps} from './ActionPanelI';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import React from 'react';

export default class ActionPanel
    extends React.Component<ActionPanelProps, {}> {
  constructor(props: ActionPanelProps) {
    super(props);
  }

  render() {
    return (
        <Box width={400} height={'100%'}
             display={'flex'} flexDirection={'column'}>
          <Box width={'100%'} height={50} bgcolor={'#0f4c75'}></Box>
          <Box width={'100%'} height={'100%'} bgcolor={'#3282b8'}></Box>
        </Box>
    );
  }
}
