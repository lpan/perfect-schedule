import React from 'react';

import PageTitle from '../shared/PageTitle/PageTitle';
import HelpContent from './HelpContent';
import contribute from './contribute.txt';

function Contribute() {
  return (
    <div>
      <PageTitle text={contribute.priTitle} />
      <HelpContent boxes={contribute.details} />
    </div>
  );
}

export default Contribute;
