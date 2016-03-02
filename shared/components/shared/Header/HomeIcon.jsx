import React from 'react';
import { Link } from 'react-router';

import IconButton from 'material-ui/lib/icon-button';
import ActionBook from 'material-ui/lib/svg-icons/action/book';
import Colors from 'material-ui/lib/styles/colors';


const imgStyle = {
  maxWidth: '100%',
  height: '3em',
  marginLeft: '1em',
  cursor: 'pointer'
};

function HomeIcon () {
  return (
    <div>
      <Link to={'/'}>
        <img style={imgStyle} src={'img/nav-home.png'} />
      </Link>
    </div>
  );
}

export default HomeIcon;
