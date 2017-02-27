/**
 * Entry point of React
 */

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import routes from './redux/routes';
import store from './redux/store';

// Render
render(
  <Provider store={store}>
    {routes}
  </Provider>,
  document.getElementById('container')
);
