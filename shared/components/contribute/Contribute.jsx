import React from 'react';

import PageTitle from '../shared/PageTitle/PageTitle';
import HelpContent from './HelpContent';
import contribute from './contribute.txt';

function Contribute (props) {
  return (
    <div>
      <PageTitle text={contribute.priTitle} />
      <HelpContent details={contribute.details} />
    </div>
  );
}

export default Contribute;
