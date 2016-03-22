import React, { PropTypes } from 'react';
import { Link } from 'react-router';

import FlatButton from 'material-ui/lib/flat-button';

const btnStyle = {
  fontWeight: '500',
};

function NavTab(props) {
  return (
    <Link to={props.link}>
      <FlatButton
        style={btnStyle}
        label={props.name}
        secondary
      />
    </Link>
  );
}

NavTab.propTypes = {
  link: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default NavTab;
