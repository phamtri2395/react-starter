/**
 * Miscellaneous
 */

export const messageStatus = {
  default: 0,
  submit: 1,
  success: 2,
  error: -1
};

export const requestTimeout = {
  response: 5000
};


/**
 * APIs
 */

export const apiList = {
  getAllUser: { method: 'GET', url: 'https://reqres.in/api/users' }
};


/**
 * Home
 */

export const PRINT_HELLO = 'PRINT_HELLO';
export const FETCH_USER = 'FETCH_USER';