import {AccountTab} from './ViewPanelI';
import AccountTabContent from './AccountTabContent';
import React from 'react';
import {Tabs} from 'antd';
import {ViewPanelProps, ViewPanelState} from './ViewPanelI';

const {TabPane} = Tabs;

const mainDivStyle = {
  width: '100%',
  height: '100%',
  backgroundColor: '#0f4c75',
}

export default class ViewPanel extends
    React.Component<ViewPanelProps, ViewPanelState> {
  constructor(props: ViewPanelProps) {
    super(props);

    this.state = {
      accountTabs: [
        {
          accountTabTitle: 'Welcome!',
          accountTabElement: this.getDefaultAccountTabElement(),
        }
      ],
    }
  }

  getDefaultAccountTabElement() {
    return <AccountTabContent accountTabTitle='Welcome!' default={true} />;
  }

  callback(key: string) {
    console.log(key);
  }

  render() {
    return (
      <div style={mainDivStyle}>
        <Tabs onChange={this.callback} type='card'
              style={{backgroundColor: '#bbe1fa', height: '100%'}} tabPosition='top'>
          {this.renderAccountTabs()}
        </Tabs>
      </div>
    );
  }

  renderAccountTabs() {
    return this.state.accountTabs.map(
        (accountTab: AccountTab, tabIndex: number) => {
      return (
        <TabPane tab={`${this.state.accountTabs[tabIndex].accountTabTitle}`}
                 key={`${tabIndex}`}
        >
          {accountTab.accountTabElement}
        </TabPane>
      );
    })
  }
}
