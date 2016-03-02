import React from 'react';
import AutoComplete from 'material-ui/lib/auto-complete';

import getSuggest from './getSuggestions';

class AutoSuggest extends React.Component {

  constructor (props) {
    super(props);

    this.state = {
      // possible schools according to user input
      dataSource: []
    };
  }

  handleUpdateInput = (input) => {
    // fetch data from server to show suggestions
    getSuggest(this.props.school, this.props.inputType, input, (data) => {
      if (data.length !== 0) {
        data = data.map(file => file.val);
        this.setState({
          dataSource: data
        });
      }
    });
  }

  render () {
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

export default AutoSuggest;
