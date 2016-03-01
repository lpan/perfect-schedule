import React from 'react';
import FlatButton from 'material-ui/lib/flat-button';

const btnStyle = {
  fontWeight: 'bold',
};


class NavTab extends React.Component {

  constructor (props) {
    super(props);
  }

  render () {
    return (
      <FlatButton style={btnStyle} label="About" secondary={true} />
    );
  }
}

export default NavTab;
