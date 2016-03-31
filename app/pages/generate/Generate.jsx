import React, { PropTypes, Component } from 'react';
import { browserHistory } from 'react-router';
import { connect } from 'react-redux';
import Paper from 'material-ui/lib/paper';
import { blue500 } from 'material-ui/lib/styles/colors';

import FloatingActionButton from 'material-ui/lib/floating-action-button';
import ContentAdd from 'material-ui/lib/svg-icons/content/add';

const barStyle = {
  width: '100%',
  height: '3em',
  marginLeft: '0',
  position: 'relative',
};

const btnStyle = {
  position: 'absolute',
  right: '4em',
  bottom: '-1em',
};

const titleStyle = {
  marginLeft: '2em',
  color: blue500,
};

class Generate extends Component {

  componentWillMount() {
    if (Object.keys(this.props.school).length === 0) {
      browserHistory.push('/');
    }
  }

  render() {
    return (
      <div>
        <Paper className="row middle-xs" style={barStyle} zDepth={3}>
          <p style={titleStyle}>{this.props.school.full}</p>
          <FloatingActionButton secondary style={btnStyle}>
            <ContentAdd />
          </FloatingActionButton>
        </Paper>
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
