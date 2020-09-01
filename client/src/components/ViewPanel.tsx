import Box from '@material-ui/core/Box';
import React from 'react';
import {ViewPanelProps} from './ViewPanelI';

export default class ViewPanel extends React.Component<ViewPanelProps, {}> {
  constructor(props: ViewPanelProps) {
    super(props);
  }

  render() {
    return <Box width={'100%'} height={'100%'} bgcolor={'#bbe1fa'}></Box>;
  }
}
