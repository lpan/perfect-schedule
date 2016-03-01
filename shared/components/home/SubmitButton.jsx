import React from 'react';
import RaisedButton from 'material-ui/lib/raised-button';

const style = {
  marginLeft: '5'
};

function SubmitButton () {
  return (
    <RaisedButton label="Get Schedules" secondary={true} style={style} />
  );
}

export default SubmitButton;
