import React, { PropTypes } from 'react';
import { blue700 } from 'material-ui/lib/styles/colors';

import Header from './layouts/Header/Header';
import Footer from './layouts/Footer/Footer';

import themeDecorator from 'material-ui/lib/styles/theme-decorator';
import getMuiTheme from 'material-ui/lib/styles/getMuiTheme';

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

export default themeDecorator(getMuiTheme({ palette: { primary1Color: blue700 } }, { userAgent: 'all' }))(App);
