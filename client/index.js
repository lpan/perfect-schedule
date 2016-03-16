import React from 'react';
import routes from '../shared/config/routes';
import DevTools from '../shared/helpers/DevTools/DevTools';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

const history = browserHistory;
const dest = document.getElementById('root');

render((
  <Router history={history} routes={routes} />
), dest);

if (process.env.NODE_ENV !== 'production') {
  window.React = React; // enable debugger
}

if (process.env.CLIENT && !window.devTooolsExtension) {
  render(
    <div>
      <Router history={history} routes={routes} />
      <DevTools />
    </div>,
    dest
  );
}
