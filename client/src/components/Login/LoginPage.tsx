import LoginTabContent from './LoginTabContent';
import LoginTabs from './LoginTabs';
import React from 'react';

import './LoginPage.css';

interface LoginPageState {
  activeTab: 'login' | 'register',
}

export default class LoginPage extends React.Component<{}, LoginPageState> {
  constructor(props: {}) {
    super(props);

    this.state = {
      activeTab: 'login',
    };
    
    this.onTabChange = this.onTabChange.bind(this);
  }

  onTabChange(event: MouseEvent | TouchEvent) {
    if (event != null && event.target != null) {
      var newTab = (event.target as HTMLDivElement).innerText.toLowerCase();
      if (newTab !== 'login' && newTab !== 'register') {
        throw new TypeError('value for a new login tab must be either' +
            ' "login" or "register".  Instead, was "' + newTab + '".');
      }
      this.setState({activeTab: newTab})
    }
  }

  render() {
    return (
      <div id='loginRoot'>
        <div id='loginContainer'>
          <LoginTabs
              activeTab={this.state.activeTab}
              onTabChange={(event: any) => this.onTabChange(event)}
          />
          <LoginTabContent activeTab={this.state.activeTab} />
        </div>
      </div>
    );
  }
}
