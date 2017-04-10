/**
 * Entry point of React
 */

import { render } from 'react-dom';

import routes from './redux/routes';
import { enhancedStore } from './redux/store';
import { createReduxApp } from './redux/provider';

// Get preloadedState sent by the server
const preloadedState = window.__REDUX_STATE__ || {};
// Clean preloadedState from window environment
delete window.__REDUX_STATE__;

// Create App
const App = createReduxApp(enhancedStore(preloadedState), routes);

// Render
render(
  App,
  document.getElementById('container')
);
