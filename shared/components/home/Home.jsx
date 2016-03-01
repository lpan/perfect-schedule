import React from 'react';

import Header from '../shared/Header/Header';
import Footer from '../shared/Footer/Footer';
import FrontLogo from './FrontLogo';
import CenterField from './CenterField';

function Home (props) {
  return (
    <div>
      <Header />
      <FrontLogo />
      <CenterField />
      <Footer />
    </div>
  );
}

export default Home;
