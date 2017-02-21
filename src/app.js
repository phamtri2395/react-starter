/**
 * Entry point of React
 */

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import routes from './utils/routes';
import store from './utils/store';

// Render
render(
  <Provider store={store}>
    {routes}
  </Provider>,
  document.getElementById('container')
);
