/**
 * Miscellaneous
 */

export const messageSymbol = {
  submit: type => `@@SUBMIT/${type}`,
  success: type => `@@SUCCESS/${type}`,
  error: type => `@@ERROR/${type}`
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
