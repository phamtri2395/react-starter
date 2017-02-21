import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';


/**
 * Import containers
 */

import Root from '../containers/Root';
import NoRoute from '../containers/NoRoute';
import Home from '../containers/Home/Home';


/**
 * Routing
 */

const routes = (
  <Router history={browserHistory}>
    <Route path="/" component={Root}>
      <Route path="home" component={Home} />
    </Route>
    <Route path="*" component={NoRoute} />
  </Router>
);

export default routes;
