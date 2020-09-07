import Dialog from '@material-ui/core/Dialog';
import {EventValueError} from '../../utils/Errors';
import {LoginModalProps, LoginModalState} from './LoginModalI';
import React from 'react';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import {ValueError} from '../../utils/Errors';


export default class LoginModal extends
    React.Component<LoginModalProps, LoginModalState> {
  constructor(props: LoginModalProps) {
    super(props);

    this.state = {
      loginChoice: 0,
    };

    this.handleTabChange = this.handleTabChange.bind(this);
    this.renderTabContent = this.renderTabContent.bind(this);
  }

  handleTabChange(changeEvent: React.ChangeEvent<{}>, value: any) {
    if (typeof value !== 'number') {
      throw new EventValueError('number', value);
    } else if (value !== 0 && value !== 1) {
      throw new ValueError([0, 1], value);
    }

    this.setState({loginChoice: value});
  }

  render() {
    return (
      <Dialog open={this.props.isOpen}>
        <Tabs value={this.state.loginChoice} onChange={this.handleTabChange}>
          <Tab label='login' />
          <Tab label='register' />
        </Tabs>
        {this.renderTabContent()}
      </Dialog>
    );
  }

  renderTabContent() {
    if (this.state.loginChoice === 0) {
      return (
        <div>
          Login
        </div>
      );
    } else if (this.state.loginChoice === 1) {
      return (
        <div>
          Register
        </div>
      );
    } else {
      throw new ValueError([0, 1], this.state.loginChoice);
    }
  }
}
