import React, { PropTypes, Component } from 'react';
import { browserHistory } from 'react-router';
import { connect } from 'react-redux';

import Paper from 'material-ui/lib/paper';
import { blue500 } from 'material-ui/lib/styles/colors';
import Dialog from 'material-ui/lib/dialog';
import FlatButton from 'material-ui/lib/flat-button';
import FloatingActionButton from 'material-ui/lib/floating-action-button';
import ContentAdd from 'material-ui/lib/svg-icons/content/add';
import AutoComplete from 'material-ui/lib/auto-complete';

import InputGrid from './InputGrid';
import getSuggest from '../../shared/AutoSuggest/getSuggestions';

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

  constructor(props) {
    super(props);

    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleUpdateInput = this.handleUpdateInput.bind(this);
    this.state = {
      open: false,
      courseCodes: [],
    };
  }

  componentWillMount() {
    if (Object.keys(this.props.school).length === 0) {
      browserHistory.push('/');
    }
  }

  handleOpen() {
    this.setState({ open: true });
  }

  handleClose() {
    this.setState({ open: false });
  }

  handleUpdateInput(input) {
    // fetch data from server to show suggestions
    getSuggest(this.props.school.name, 'code', input, (err, data) => {
      if (data.length !== 0) {
        this.setState({
          courseCodes: JSON.parse(data.text).map(code => code.val),
        });
      }
    });
  }

  render() {
    const actions = [
      <FlatButton
        label="Cancel"
        secondary
        onTouchTap={this.handleClose}
      />,
      <FlatButton
        label="Submit"
        primary
        keyboardFocused
        onTouchTap={this.handleClose}
      />,
    ];

    return (
      <div>
        <Paper className="row middle-xs" style={barStyle} zDepth={3}>
          <p style={titleStyle}>{this.props.school.full}</p>
          <FloatingActionButton secondary style={btnStyle} onClick={this.handleOpen}>
            <ContentAdd />
          </FloatingActionButton>
        </Paper>
        <div className="row center-xs" style={{ marginTop: '2em' }}>
          <div className="col-xs-10">
            <InputGrid />
          </div>
        </div>
        <Dialog
          title="Enter the Code of One Class that You Have to Take"
          actions={actions}
          modal
          open={this.state.open}
          onRequestClose={this.handleClose}
        >
          <AutoComplete
            hintText="Enter a course code"
            filter={AutoComplete.caseInsensitiveFilter}
            dataSource={this.state.courseCodes}
            onUpdateInput={this.handleUpdateInput}
            onNewRequest={this.handleUpdateInput}
          />
        </Dialog>
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
