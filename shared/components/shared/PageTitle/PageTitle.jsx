import React, { PropTypes } from 'react';
import Colors from 'material-ui/lib/styles/colors';

const headStyle = {
  color: 'white',
  textShadow: `2px 2px ${Colors.blue600}`,
};

function PageTitle(props) {
  return (
    <div style={{ marginTop: '1.5em' }} className="row center-xs">
      <h1 style={headStyle}>{props.text}</h1>
    </div>
  );
}

PageTitle.propTypes = {
  text: PropTypes.string.isRequired,
};

export default PageTitle;
