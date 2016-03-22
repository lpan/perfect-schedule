import React, { PropTypes } from 'react';
import AutoComplete from 'material-ui/lib/auto-complete';

import getSuggest from './getSuggestions';

class AutoSuggest extends React.Component {

  constructor(props) {
    super(props);

    this.handleUpdateInput = this.handleUpdateInput.bind(this);
    this.state = {
      // possible schools according to user input
      dataSource: [],
    };
  }

  handleUpdateInput(input) {
    // fetch data from server to show suggestions
    getSuggest(this.props.school, this.props.inputType, input, (err, data) => {
      if (data.length !== 0) {
        this.setState({
          dataSource: JSON.parse(data.text).map(file => file.val),
        });
      }
    });
  }

  render() {
    return (
      <AutoComplete
        hintText="Enter your school name"
        filter={AutoComplete.caseInsensitiveFilter}
        dataSource={this.state.dataSource}
        onUpdateInput={this.handleUpdateInput}
      />
    );
  }
}

AutoSuggest.propTypes = {
  school: PropTypes.string.isRequired,
  inputType: PropTypes.string.isRequired,
};

export default AutoSuggest;
