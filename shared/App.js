import React, { PropTypes } from 'react';

import Header from './layouts/Header/Header';
import Footer from './layouts/Footer/Footer';

// footer height
const spaceStyle = {
  paddingBottom: '3em',
};

function App(props) {
  return (
    <div>
      <Header />
      { props.children }
      <div style={spaceStyle}></div>
      <Footer />
    </div>
  );
}

App.propTypes = {
  children: PropTypes.object.isRequired,
};

export default App;
