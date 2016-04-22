import React, { Component } from 'react';

import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import LeftNav from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

class Header extends Component {
  constructor() {
    super();

    this.handleToggle = this.handleToggle.bind(this);
    this.state = { open: false };
  }

  handleToggle() {
    this.setState({ open: !this.state.open });
  }

  render() {
    return (
      <div>
        <AppBar
          title="Perfect Schedule"
          iconElementRight={
            <IconButton
              linkButton
              href="https:github.com/lorix-lpan/perfect-schedule"
              iconClassName="fa fa-github"
            />
          }
          onLeftIconButtonTouchTap={this.handleToggle}
        />
        <LeftNav
          docked={false}
          open={this.state.open}
          onRequestChange={this.handleToggle}
        >
          <MenuItem />
        </LeftNav>
      </div>
    );
  }
}

export default Header;
