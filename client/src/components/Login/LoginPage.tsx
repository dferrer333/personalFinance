import {LoginTabContent} from './LoginTabs';
import React from 'react';

import './LoginPage.css';

export default class LoginPage extends React.Component {
  constructor(props: {}) {
    super(props);

    this.state = {
      activeTab: 'login',
    };
  }

  render() {
    return (
      <div id='loginRoot'>
        <div id='loginContainer'>
          <div id='loginTabHeader'>

          </div>
          <LoginTabContent activeTab='login' />
        </div>
      </div>
    );
  }
}
