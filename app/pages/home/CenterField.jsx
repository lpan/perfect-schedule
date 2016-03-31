import React from 'react';
import Paper from 'material-ui/lib/paper';

import AutoSuggest from '../../shared/AutoSuggest/AutoSuggest';
import { blue500 } from 'material-ui/lib/styles/colors';

const centerStyle = {
  marginTop: '3%',
  textAlign: 'center',
};

const titleStyle = {
  color: blue500,
  fontSize: '1.3em',
  fontWeight: '300',
};

const containerStyle = {
  paddingTop: '0.5em',
  paddingBottom: '1em',
};

function CenterField() {
  return (
    <div className="row center-xs">
      <Paper className="col-md-6 col-xs-10" style={centerStyle} zDepth={3}>
        <div style={containerStyle}>
          <div className="row center-xs">
            <p style={titleStyle}>Find Your Perfect Schedule Now</p>
          </div>
          <AutoSuggest school="marianopolis" inputType="school" />
        </div>
      </Paper>
    </div>
  );
}

export default CenterField;
