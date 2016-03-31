import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from '../App';
import Home from '../pages/home/Home';
import Generate from '../pages/generate/Generate';

const routes = (
  <Route path="/" component={App} >
    <IndexRoute component={Home} />
    <Route path="/generate" component={Generate} />
  </Route>
);

export default routes;
