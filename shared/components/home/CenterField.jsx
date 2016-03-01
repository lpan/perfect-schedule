import React from 'react';
import Paper from 'material-ui/lib/paper';

import Radium from 'radium';

import AutoSuggest from '../shared/AutoSuggest';
import SubmitButton from './SubmitButton';
import Colors from 'material-ui/lib/styles/colors';

const centerStyle = {
  height: '10em',
  width: '50%',
  margin: 'auto',
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
    <Paper style={centerStyle} zDepth={3}>
      <div style={containerStyle}>
        <p style={titleStyle}>Find Your Perfect Schedule Now</p>
        <AutoSuggest school="marianopolis" inputType="school" />
        <SubmitButton />
      </div>
    </Paper>
  );
}

export default Radium(CenterField);
