import React from 'react';
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
      <FlatButton style={btnStyle} label={this.props.name} secondary={true} />
    );
  }
}

export default NavTab;
