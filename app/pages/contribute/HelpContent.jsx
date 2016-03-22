import React, { PropTypes } from 'react';
import PaperBox from '../../shared/PaperBox/PaperBox';

const layout = 'col-md-4 col-xs-10';

function HelpContent(props) {
  return (
    <div className="row around-md center-xs">
      {props.boxes.map((box, i) => <PaperBox key={i} layout={layout} box={box} />)}
    </div>
  );
}

HelpContent.propTypes = {
  boxes: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    text: PropTypes.any.isRequired,
  })),
};

export default HelpContent;
