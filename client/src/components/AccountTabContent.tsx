import Box from '@material-ui/core/Box';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import React from 'react';
import Select from '@material-ui/core/Select';

import './AccountTabContent.css';

interface AccountTabContentProps {
  accountTabTitle: string,
  default?: boolean,
}

export default class AccountTabContent extends
    React.Component<AccountTabContentProps, {}> {
  constructor(props: AccountTabContentProps) {
    super(props);

    this.state = {
      defaultAccountSelectedValue: '',
    };
  }

  handleSelectChange(newValue: React.ChangeEvent<{ name?: string | undefined;
      value: unknown; }>) {
    console.log(newValue.value);
    // this.setState()
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
        <InputLabel >
          Account Name
        </InputLabel>
        <Select onChange={this.handleSelectChange}
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
