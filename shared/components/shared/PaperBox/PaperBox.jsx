import React from 'react';
import Paper from 'material-ui/lib/paper';
import Colors from 'material-ui/lib/styles/colors';

const contStyle = {
  marginTop: '2em'
};

const titleStyle = {
  fontSize: '1.5em',
  color: Colors.blue600,
  fontWeight: '300'
};

const textStyle = {
  color: Colors.blue800,
  fontSize: '1em',
  fontWeight: '300',
  paddingBottom: '3em',
  textAlign: 'justify'
};

function PaperBox (props) {
  return (
    <Paper style={contStyle} zDepth={4} className={props.layout}>
      <div className="row center-xs">
        <p style={titleStyle}>{props.box.title}</p>
      </div>
      <div className="row center-xs">
        <p style={textStyle} className="col-xs-10">{props.box.text}</p>
      </div>
    </Paper>
  );
}

export default PaperBox;
