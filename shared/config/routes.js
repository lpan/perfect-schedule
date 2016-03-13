import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from '../App';
import Home from '../components/home/Home';
import About from '../components/about/About';
import Contribute from '../components/contribute/Contribute';
import Generate from '../components/generate/Generate';

const routes = (
  <Route path="/" component={App} >
    <IndexRoute component={Home} />
    <Route path="/about" component={About} />
    <Route path="/contribute" component={Contribute} />
    <Route path="/generate" component={Generate} />
  </Route>
);

export default routes;
