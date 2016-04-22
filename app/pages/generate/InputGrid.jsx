import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Table from 'material-ui/Table/Table';
import TableBody from 'material-ui/Table/TableBody';

class InputGrid extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Table>
          <TableBody displayRowCheckbox={false} />
        </Table>
      </div>
    );
  }
}

function mapStateToProps(store) {
  return {
    school: store.school,
  };
}

InputGrid.propTypes = {
  school: PropTypes.shape({
    full: PropTypes.string,
    name: PropTypes.string,
  }).isRequired,
};

export default connect(mapStateToProps)(InputGrid);
