/**
 * Redux reducer
 */

import { combineReducers } from 'redux';


/**
 * Import separate reducers
 */

import HomeReducer from '../containers/Home/HomeReducer';

// Combine reducers
export default combineReducers({
  HomeReducer
});
