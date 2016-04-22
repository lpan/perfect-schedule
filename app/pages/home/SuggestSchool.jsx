import React, { PropTypes, Component } from 'react';
import { browserHistory } from 'react-router';
import { connect } from 'react-redux';
import AutoComplete from 'material-ui/AutoComplete';
import RaisedButton from 'material-ui/RaisedButton';
import * as Actions from '../../redux/actions/actions';

import getSuggest from '../../shared/AutoSuggest/getSuggestions';

class SuggestSchool extends Component {

  constructor(props) {
    super(props);

    this.handleUpdateInput = this.handleUpdateInput.bind(this);
    this.handleNewRequest = this.handleNewRequest.bind(this);
    this.setSchool = this.setSchool.bind(this);
    this.state = {
      // possible schools according to user input
      button: false,
      dataSource: [],
    };
  }

  setSchool() {
    this.props.dispatch(Actions.setSchool(this.state.school));
    browserHistory.push('/generate');
  }

  handleUpdateInput(input) {
    // fetch data from server to show suggestions
    getSuggest(null, this.props.inputType, input, (err, data) => {
      if (data.length !== 0) {
        this.setState({
          dataSource: JSON.parse(data.text).map(file => file.full),
          schools: JSON.parse(data.text),
        });
      }
    });
  }

  handleNewRequest(input) {
    for (let i = 0; i < this.state.dataSource.length; i++) {
      if (this.state.schools[i].full === input) {
        this.setState({ school: this.state.schools[i], button: true });
        break;
      }
    }
  }

  render() {
    return (
      <div style={{ paddingBottom: '2em' }} className="row center-xs middle-xs">
        <div className="col-md-4 col-xs-12">
          <AutoComplete
            hintText="Enter your school name"
            filter={AutoComplete.caseInsensitiveFilter}
            dataSource={this.state.dataSource}
            onUpdateInput={this.handleUpdateInput}
            onNewRequest={this.handleNewRequest}
          />
        </div>
        <div className="col-md-4 col-xs-12">
          <RaisedButton
            label="Get Schedules"
            secondary
            disabled={!this.state.button}
            style={{ marginLeft: '1em' }}
            onClick={this.setSchool}
          />
        </div>
      </div>
    );
  }
}

SuggestSchool.propTypes = {
  inputType: PropTypes.string.isRequired,
  dispatch: PropTypes.func.isRequired,
};

export default connect()(SuggestSchool);
