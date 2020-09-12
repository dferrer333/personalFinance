import React, { MouseEventHandler, TouchEventHandler } from 'react';

import './LoginTabs.css';

interface LoginTabsProps {
  activeTab: 'login' | 'register',
  onTabChange: MouseEventHandler | TouchEventHandler,
}

export default class LoginTabs extends React.Component<LoginTabsProps, {}> {
  render() {
    let loginTabClassName = 'login-tab';
    let registerTabClassName = 'login-tab';

    if (this.props.activeTab === 'login') {
      loginTabClassName += ' active-tab';
    } else {
      registerTabClassName += ' active-tab';
    }

    return (
      <div id='loginTabHeader'>
        <div
            className={loginTabClassName}
            onClick={(event: any) => this.props.onTabChange(event)}
            onTouchEnd={(event: any) => this.props.onTabChange(event)}
        >
          <p>Login</p>
        </div>
        <div
            className={registerTabClassName}
            onClick={(event: any) => this.props.onTabChange(event)}
            onTouchEnd={(event: any) => this.props.onTabChange(event)}
        >
          <p>Register</p>
        </div>
      </div>
    );
  }
}
