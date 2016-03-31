import React, { PropTypes, Component } from 'react';
import { browserHistory } from 'react-router';
import { connect } from 'react-redux';
import Paper from 'material-ui/lib/paper';

const barStyle = {
  width: '100%',
  height: '4em',
};

class Generate extends Component {

  constructor(props) {
    super(props);
  }

  componentWillMount() {
    if (Object.keys(this.props.school).length === 0) {
      browserHistory.push('/');
    }
  }

  render() {
    return (
      <Paper style={barStyle} zDepth={3}>
        <p>{this.props.school.full}</p>
      </Paper>
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
