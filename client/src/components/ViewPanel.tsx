import React from 'react';
import {Tabs} from 'antd';
import {ViewPanelProps} from './ViewPanelI';

const {TabPane} = Tabs;

const mainDivStyle = {
  width: '100%',
  height: '100%',
  backgroundColor: '#0f4c75',
}

export default class ViewPanel extends React.Component<ViewPanelProps, {}> {
  constructor(props: ViewPanelProps) {
    super(props);
  }

  callback(key: string) {
    console.log(key);
  }

  render() {
    return (
      <div style={mainDivStyle}>
        <Tabs onChange={this.callback} type='card'
              style={{backgroundColor: '#bbe1fa', height: '100%'}} tabPosition='top'>
          <TabPane tab="Tab 1" key="1">
            Content of Tab Pane 1
          </TabPane>
          <TabPane tab="Tab 2" key="2">
            Content of Tab Pane 2
          </TabPane>
        </Tabs>
      </div>
    );
  }
}
