import React from 'react';

const containerStyle = {
  marginTop: '2.5em',
  textAlign: 'center',
  color: 'white',
  textShadow: '2px 2px #1e88e5',
};

const priStyle = {
  fontWeight: '500',
  fontSize: '2.3em',
  marginBottom: '0',
};

const secStyle = {
  fontSize: '1em',
};

const imgStyle = {
  height: '6em',
  width: '6em',
};

function FrontLogo() {
  return (
    <div style={containerStyle}>
      <img style={imgStyle} src={'./img/big-logo.png'} />
      <p style={priStyle}>Your Perfect Schedule</p>
      <p style={secStyle}>Make your perfect mock schedule with easiness</p>
    </div>
  );
}

export default FrontLogo;
