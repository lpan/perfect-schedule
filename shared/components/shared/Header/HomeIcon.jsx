import React from 'react';
import IconButton from 'material-ui/lib/icon-button';
import ActionBook from 'material-ui/lib/svg-icons/action/book';
import Colors from 'material-ui/lib/styles/colors';

function HomeIcon () {
  return (
    <IconButton>
      <ActionBook
        color={Colors.blue500} 
        viewBox='0 0 20 20'
      />
    </IconButton>
  );
}

export default HomeIcon;
