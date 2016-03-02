import React from 'react';
import Paper from 'material-ui/lib/paper';

import AutoSuggest from '../shared/AutoSuggest/AutoSuggest';
import SubmitButton from './SubmitButton';
import Colors from 'material-ui/lib/styles/colors';

const centerStyle = {
  height: '10em',
  marginTop: '3%',
  textAlign: 'center',
};

const titleStyle = {
  color: Colors.blue500,
  fontSize: '1.3em',
  fontWeight: '300',
};

const containerStyle = {
  paddingTop: '0.5em'
};

function CenterField () {
  return (
    <div className="row center-xs">
      <Paper className="col-md-6" style={centerStyle} zDepth={3}>
        <div style={containerStyle}>
          <div className="row center-xs">
            <p style={titleStyle}>Find Your Perfect Schedule Now</p>
          </div>
          <div className="row center-xs">
            <AutoSuggest className="col-md-8 col-xs-12" school="marianopolis" inputType="school" />
            <SubmitButton className="col-md-4" />
          </div>
        </div>
      </Paper>
    </div>
  );
}

export default CenterField;
