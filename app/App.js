import React, { PropTypes } from 'react';

import Header from './layouts/Header/Header';
import Footer from './layouts/Footer/Footer';

import getMuiTheme from 'material-ui/lib/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/lib/MuiThemeProvider';

import MyRawTheme from './config/theme';

const muiTheme = getMuiTheme(MyRawTheme, { userAgent: 'all' });

// footer height
const spaceStyle = {
  paddingBottom: '3em',
};

function App(props) {
  return (
    <MuiThemeProvider muiTheme={muiTheme}>
      <div>
        <Header />
        { props.children }
        <div style={spaceStyle}></div>
        <Footer />
      </div>
    </MuiThemeProvider>
  );
}

App.propTypes = {
  children: PropTypes.object.isRequired,
};

export default App;
