/**
 * Define API handling methods
 */

import Ajax from './ajax';

export const requestTimeout = {
  response: 5000
};

export const URLs = {
  fetchUserList: { method: 'GET', url: 'https://reqres.in/api/users' }
};


/**
 * Home's apis
 */

export const FetchUserList = () => (
  new Ajax({
    ...URLs.fetchUserList,
    requestTimeout,
    headers: { 'Content-Type': 'application/json' }
  })
);
