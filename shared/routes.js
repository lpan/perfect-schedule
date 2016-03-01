import { Route, IndexRoute } from 'react-router';
import React from 'react';

import App from './container/App';
import Home from './pages/home/Home';

const routes = (
  <Route path="/" component={App} >
    <IndexRoute component={Home} />
  </Route>
);

export default routes;
