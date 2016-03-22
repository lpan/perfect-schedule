import React from 'react';
import Paper from 'material-ui/lib/paper';

import HomeIcon from './HomeIcon';
import NavTab from './NavTab';

const contStyle = {
  marginRight: '1.5em',
};

function Header() {
  return (
    <Paper className="row middle-xs between-xs" zDepth={2}>
      <HomeIcon link="/" />
      <div style={contStyle}>
        <NavTab name="About" link="/about" />
        <NavTab name="Contribute" link="/contribute" />
      </div>
    </Paper>
  );
}

export default Header;
