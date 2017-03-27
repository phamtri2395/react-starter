/**
 * Entry point of React
 */

import { render } from 'react-dom';

import routes from './redux/routes';
import { enhancedStore } from './redux/store';
import { createReduxApp } from './redux/provider';

const App = createReduxApp(enhancedStore(), routes);

// Render
render(
  App,
  document.getElementById('container')
);
