import React from 'react';
import { Link } from 'react-router';

const imgStyle = {
  maxWidth: '100%',
  height: '3em',
  marginLeft: '1em',
  cursor: 'pointer',
};

function HomeIcon() {
  return (
    <div>
      <Link to={'/'}>
        <img style={imgStyle} src={'img/nav-home.png'} />
      </Link>
    </div>
  );
}

export default HomeIcon;
