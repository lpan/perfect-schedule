import React, { PropTypes } from 'react';
import { browserHistory } from 'react-router';
import { connect } from 'react-redux';
import AutoComplete from 'material-ui/lib/auto-complete';
import RaisedButton from 'material-ui/lib/raised-button';
import * as Actions from '../../redux/actions/actions';

import getSuggest from './getSuggestions';

class AutoSuggest extends React.Component {

  constructor(props) {
    super(props);

    this.handleUpdateInput = this.handleUpdateInput.bind(this);
    this.setSchool = this.setSchool.bind(this);
    this.state = {
      // possible schools according to user input
      dataSource: [],
    };
  }

  setSchool() {
    if (this.state.schools.length === 1) {
      this.props.dispatch(Actions.setSchool(this.state.schools[0]));
      browserHistory.push('/generate');
    }
  }

  handleUpdateInput(input) {
    // fetch data from server to show suggestions
    getSuggest(this.props.school, this.props.inputType, input, (err, data) => {
      if (data.length !== 0) {
        this.setState({
          dataSource: JSON.parse(data.text).map(file => file.full),
          schools: JSON.parse(data.text),
        });
      }
    });
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
            onNewRequest={this.handleUpdateInput}
          />
        </div>
        <div className="col-md-4 col-xs-12">
          <RaisedButton label="Get Schedules" secondary style={{ marginLeft: '5' }} onClick={this.setSchool} />
        </div>
      </div>
    );
  }
}

AutoSuggest.propTypes = {
  school: PropTypes.string.isRequired,
  inputType: PropTypes.string.isRequired,
  dispatch: PropTypes.func.isRequired,
};

export default connect()(AutoSuggest);
