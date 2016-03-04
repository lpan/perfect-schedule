import React from 'react';
import Paper from 'material-ui/lib/paper';

import PaperBox from '../shared/PaperBox/PaperBox';

const paperStyle = {
  marginTop: '1em'
};

const layout = 'col-md-4 col-xs-10';

function HelpContent (props) {
  return (
    <div className="row around-md center-xs">
      {props.boxes.map( (box, i) => <PaperBox key={i} layout={layout} box={box} />)}
    </div>
  );
}

export default HelpContent;
