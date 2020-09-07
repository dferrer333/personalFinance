import {AccountTabContentProps, AccountTabContentState, ChangeEvent}
    from './AccountTabContentI';
import Box from '@material-ui/core/Box';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import React from 'react';
import Select from '@material-ui/core/Select';

import './AccountTabContent.css';

export default class AccountTabContent extends
    React.Component<AccountTabContentProps, AccountTabContentState> {
  tabContentWrapper: React.RefObject<unknown>;

  constructor(props: AccountTabContentProps) {
    super(props);

    this.tabContentWrapper = React.createRef();
    this.state = {
      defaultAccountSelectedValue: '',
    };

    this.handleSelectChange = this.handleSelectChange.bind(this);
  }

  handleSelectChange(changeEvent: ChangeEvent) {
    console.log(changeEvent.target.value);

    if (typeof changeEvent.target.value !== 'number') {
      throw new TypeError('event value must be a number, is of type ' +
          `${typeof changeEvent.target.value}`);
    }

    this.setState(
        {defaultAccountSelectedValue: `${changeEvent.target.value}`});
  }

  render() {
    return (
      <Box padding={10}>
        {
          this.props.default ? this.renderDefaultAccountTabContent() :
              this.renderCustomAccountTabContent()
        }
      </Box>
    );
  }

  renderDefaultAccountTabContent() {
    return (
      <FormControl style={{minWidth: '200px'}}>
        <InputLabel id='default-account-tab-selector-label'>
          Account Name
        </InputLabel>
        <Select id='default-account-tab-selector'
                labelId='default-account-tab-selector-label'
                value={this.state.defaultAccountSelectedValue}
                onChange={this.handleSelectChange}
        >
          {this.requestUserAccounts()}
        </Select>
      </FormControl>
    );
  }

  // TODO:
  requestUserAccounts() {
    return [
      <MenuItem key={'0'} value={0}>Account Name 0</MenuItem>,
      <MenuItem key={'1'} value={1}>Account Name 1</MenuItem>,
      <MenuItem key={'2'} value={2}>Account Name 2</MenuItem>,
      <MenuItem key={'3'} value={3}>Account Name 3</MenuItem>,
    ];
  }

  // TODO:
  renderCustomAccountTabContent() {
    return undefined;
  }
}
