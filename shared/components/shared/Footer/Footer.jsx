import React from 'react';
import Colors from 'material-ui/lib/styles/colors';

const textStyle = {
  fontSize: '0.8em',
  color: Colors.blue100,
  textDecoration: 'none',
  position: 'fixed',
  right: '3%',
  bottom: '0'
};

const hrefStyle = {
  color: Colors.blue100,
};

function Footer () {
  return (
    <p style={textStyle}>
      A project by &nbsp;
      <a style={hrefStyle} href={'https://github.com/lorix-lpan'} target="_blank">
        @lorix-lpan
      </a>
    </p>
  );
}

export default Footer;
