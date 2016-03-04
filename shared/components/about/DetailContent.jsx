import React from 'react';
import PaperBox from '../shared/PaperBox/PaperBox';

const layout = 'col-md-3 col-xs-8';

function DetailContent (props) {
  return (
    <div className="row around-xs">
      {props.boxes.map( (box,i) => <PaperBox key={i} box={box} layout={layout} />)}
    </div>
  );
}

export default DetailContent;
