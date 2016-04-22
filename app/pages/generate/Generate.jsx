import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';

import Paper from 'material-ui/Paper';
import { blue500 } from 'material-ui/styles/colors';

import InputGrid from './InputGrid';
import AddCourse from './AddCourse';

const barStyle = {
  width: '100%',
  height: '3em',
  marginLeft: '0',
  position: 'relative',
};

const titleStyle = {
  marginLeft: '2em',
  color: blue500,
};

class Generate extends Component {

  componentWillMount() {
  }

  render() {
    return (
      <div>
        <Paper className="row middle-xs" style={barStyle} zDepth={3}>
          <p style={titleStyle}>{this.props.school.full}</p>
          <AddCourse school={this.props.school} />
        </Paper>
        <div className="row center-xs" style={{ marginTop: '2em' }}>
          <div className="col-xs-10">
            <InputGrid />
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(store) {
  return {
    school: store.school,
  };
}

Generate.propTypes = {
  school: PropTypes.shape({
    full: PropTypes.string,
    name: PropTypes.string,
  }).isRequired,
};

export default connect(mapStateToProps)(Generate);
