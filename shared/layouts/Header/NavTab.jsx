import React from 'react';
import { Link } from 'react-router';

import FlatButton from 'material-ui/lib/flat-button';

const btnStyle = {
  fontWeight: '500'
};

class NavTab extends React.Component {

  constructor (props) {
    super(props);
  }

  render () {
    return (
      <Link to={this.props.link}>
        <FlatButton
          style={btnStyle} 
          label={this.props.name}
          secondary={true}
        />
      </Link>
    );
  }
}

export default NavTab;
