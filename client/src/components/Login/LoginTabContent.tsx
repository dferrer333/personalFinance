import React from 'react';

import './LoginTabContent.css';

interface LoginTabContentProps {
  activeTab: 'login' | 'register',
}

export default class LoginTabContent
    extends React.Component<LoginTabContentProps, {}> {
  constructor(props: LoginTabContentProps) {
    super(props);
  }

  render() {
    if (this.props.activeTab === 'login') {
      return this.renderLoginContent();
    } else {
      return this.renderRegisterContent();
    }
  }

  renderLoginContent(): JSX.Element {
    return (
      <div id='loginTabContent'>
        <form>
          <label htmlFor='loginUsername'>Username:</label>
          <input id='loginUsername' ></input>

          <label htmlFor='loginPassword'>Password:</label>
          <input id='loginPassword' type='password'></input>

          <button type='submit'>Login</button>
        </form>
      </div>
    );
  }

  renderRegisterContent(): JSX.Element {
    return (
      <div id='loginTabContent'>
        <label>Enter your Email</label>
        <input></input>

        <label>Confirm your Email</label>
        <input></input>

        <label>Enter your First Name</label>
        <input></input>

        <label>Enter your Last Name</label>
        <input></input>

        <label>Enter a Password</label>
        <input type='password'></input>

        <label>Confirm your Password</label>
        <input type='password'></input>

        <label>Choose Your Favorite Animal</label>
        <input type='select'></input>
      </div>
    );
  }
}
