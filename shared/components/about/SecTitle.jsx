import React, { PropTypes } from 'react';
import { blue600 } from 'material-ui/lib/styles/colors';

const headStyle = {
  color: 'white',
  textShadow: `2px 2px ${blue600}`,
  fontWeight: '300',
  fontSize: '1em',
  marginTop: '0',
};

function SecTitle(props) {
  return (
    <div className="row center-xs">
      <p className="col-md-6 col-xs-8" style={headStyle}>{props.text}</p>
    </div>
  );
}

SecTitle.propTypes = {
  text: PropTypes.string.isRequired,
};

export default SecTitle;
