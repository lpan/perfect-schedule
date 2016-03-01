import React from 'react';
import { Link } from 'react-router';
import Paper from 'material-ui/lib/paper';

import HomeIcon from './HomeIcon';
import NavTab from './NavTab';

const navStyle = {
  height: '2.5em',
  width: '100%',
};

const tabsStyle = {
  position: 'absolute',
  right: '2%',
  top: '1%'
};

function Header () {
  return (
    <Paper style={navStyle} zDepth={2}>
      <HomeIcon />
      <div style={tabsStyle}>
        <NavTab name="Developer" />
        <NavTab name="Donate" />
      </div>
    </Paper>
  );
}

export default Header;
