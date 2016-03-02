import React from 'react';
import Paper from 'material-ui/lib/paper';

import Colors from 'material-ui/lib/styles/colors';

const contStyle = {
  marginTop: '1em'
};

const titleStyle = {
  fontSize: '2em',
  color: Colors.blue600,
  fontWeight: '300'
};

const textStyle = {
  color: Colors.blue800,
  fontSize: '1em',
  fontWeight: '300',
  paddingBottom: '3em'
};

const linkStyle = {
  color: Colors.blue800,
};

const paperStyle = {
  marginTop: '1em'
};

function HelpContent (props) {
  return (
    <div className="row around-md center-xs" style={contStyle}>
      <Paper style={paperStyle} className="col-md-4 col-xs-10" zDepth={3}>
        <div className="row center-xs">
          <p style={titleStyle}>A Developer</p>
        </div>
        <div className="row center-xs">
          <p style={textStyle} className="col-xs-10">
            Want your school to be supported? Supply your school&rsquo;s
            course data according to the <a style={linkStyle} href={''}>specifications</a>&nbsp;
            <a href={''} style={linkStyle}>here</a>. 
            Talk to your school&rsquo;s representatives or&nbsp;
            <a href={'https://github.com/lorix-lpan/converter-marianopolis'} target="_blank"
            style={linkStyle}>hack</a> your school&rsquo;s course offering PDF. 
            It is all up to you!
          </p>
        </div>
      </Paper>
      <Paper style={paperStyle} className="col-md-4 col-xs-10" zDepth={3}>
        <div className="row center-xs">
          <p style={titleStyle}>Not a Developer</p>
        </div>
        <div className="row center-xs">
          <p style={textStyle} className="col-xs-10">
            We need your help too if you do not know how to code! In order to provide
            the best user experience as possible, we do not put ads on our website.
            However, as you probably know, hosting and domain name cost money. If you 
            like this project, share it on your favourite social media or&nbsp;
            <a href={''} style={linkStyle}>Donate</a>
          </p>
        </div>
      </Paper>
    </div>
  );
}

export default HelpContent;
