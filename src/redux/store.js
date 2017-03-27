/**
 * Redux store
 */

import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import thunk from 'redux-thunk';

import reducer from './reducer';

const devToolsEnhancers = composeWithDevTools({
  // Specify here name, actionsBlacklist, actionsCreators and other options if needed
});

const middlewares = [thunk];


// Store configuration
export const enhancedStore = preloadedState => (
  createStore(
    reducer,
    preloadedState,
    devToolsEnhancers(applyMiddleware(...middlewares))
  )
);
