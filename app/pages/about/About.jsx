import React from 'react';

import PageTitle from '../../shared/PageTitle/PageTitle';
import SecTitle from './SecTitle';
import DetailContent from './DetailContent';

import about from './about.txt';

function About() {
  return (
    <div>
      <PageTitle text={about.priText} />
      <SecTitle text={about.secText} />
      <DetailContent boxes={about.details} />
    </div>
  );
}

export default About;
