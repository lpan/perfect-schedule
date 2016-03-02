import React from 'react';
import Colors from 'material-ui/lib/styles/colors';

const contStyle = {
  position: 'absolute',
  bottom: '0',
  right: '0'
};

const textStyle = {
  fontSize: '0.8em',
  color: Colors.blue100,
  paddingRight: '2em',
};

const hrefStyle = {
  color: Colors.blue100,
};

function Footer () {
  return (
    <div style={contStyle} className="row end-xs">
      <p style={textStyle}>
        A project by &nbsp;
        <a style={hrefStyle} href={'https://github.com/lorix-lpan'} target="_blank">
          @lorix-lpan
        </a>
      </p>
    </div>
  );
}

export default Footer;
