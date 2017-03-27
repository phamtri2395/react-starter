import React from 'react';
import { Provider } from 'react-redux';

// Create App
export const createReduxApp = (injectedStore, routes) => (
  <Provider store={injectedStore}>
    {routes}
  </Provider>
);
