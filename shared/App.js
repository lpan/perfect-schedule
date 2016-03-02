import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import Header from './layouts/Header/Header';
import Footer from './layouts/Footer/Footer';

import getMuiTheme from 'material-ui/lib/styles/getMuiTheme';
import themeDecorator from 'material-ui/lib/styles/theme-decorator';

// footer height
const spaceStyle = {
  paddingBottom: '3em'
};

@themeDecorator(getMuiTheme(null, { userAgent: 'all' }))
class App extends Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <div>
        <Header />
        { this.props.children }
        <div style={spaceStyle}></div>
        <Footer />
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired,
};

export default connect()(App);
