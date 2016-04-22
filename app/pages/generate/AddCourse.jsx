import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';

import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import AutoComplete from 'material-ui/AutoComplete';
import ContentAdd from 'material-ui/svg-icons/content/add';
import getSuggest from '../../shared/AutoSuggest/getSuggestions';

import * as Actions from '../../redux/actions/actions';

const btnStyle = {
  position: 'absolute',
  right: '4em',
  bottom: '-1em',
};

class AddCourse extends Component {

  constructor(props) {
    super(props);

    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.addCodeToTree = this.addCodeToTree.bind(this);
    this.handleUpdateInput = this.handleUpdateInput.bind(this);
    this.handleNewRequest = this.handleNewRequest.bind(this);
    this.state = {
      open: false,
      submit: false,
      courseCodes: [],
    };
  }

  handleUpdateInput(input) {
    // fetch data from server to show suggestions
    getSuggest(this.props.school.name, 'code', input, (err, data) => {
      if (data.length !== 0) {
        this.setState({
          courseCodes: JSON.parse(data.text).map(code => code.val),
          submit: false,
        });
      }
    });
  }

  handleNewRequest(input) {
    this.setState({ submit: true, code: input });
  }

  handleOpen() {
    this.setState({ open: true });
  }

  addCodeToTree() {
    this.props.dispatch(Actions.fetchPossibleCourses(this.state.code, this.props.school.name));
    this.setState({ open: false, submit: false });
  }

  handleClose() {
    this.setState({ open: false, submit: false });
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
        disabled={!this.state.submit}
        onTouchTap={this.addCodeToTree}
      />,
    ];

    return (
      <div>
        <FloatingActionButton secondary style={btnStyle} onClick={this.handleOpen}>
          <ContentAdd />
        </FloatingActionButton>
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
            onNewRequest={this.handleNewRequest}
          />
        </Dialog>
      </div>
    );
  }
}

AddCourse.propTypes = {
  school: PropTypes.shape({
    full: PropTypes.string,
    name: PropTypes.string,
  }).isRequired,
  dispatch: PropTypes.func.isRequired,
};

export default connect()(AddCourse);
