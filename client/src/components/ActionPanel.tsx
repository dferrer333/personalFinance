import {ActionPanelProps} from './ActionPanelI';
import React from 'react';

const mainDivStyle = {
  width: 400,
  height: '100%',
  display: 'flex-column',
}

export default class ActionPanel
    extends React.Component<ActionPanelProps, {}> {
  constructor(props: ActionPanelProps) {
    super(props);
  }

  render() {
    return (
        <div style={mainDivStyle}>
          <div style={{width: '100%', height: 50, backgroundColor: '#0f4c75'}}></div>
          <div style={{width: '100%', height: '100%', backgroundColor: '#3282b8'}}></div>
        </div>
    );
  }
}
