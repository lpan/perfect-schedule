import React, { Component } from 'react';

import AppBar from 'material-ui/lib/app-bar';
import IconButton from 'material-ui/lib/icon-button';
import LeftNav from 'material-ui/lib/left-nav';
import MenuItem from 'material-ui/lib/menus/menu-item';

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
          <MenuItem>Menu Item</MenuItem>
          <MenuItem>Menu Item 2</MenuItem>
        </LeftNav>
      </div>
    );
  }
}

export default Header;
