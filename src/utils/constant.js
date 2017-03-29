/**
 * Miscellaneous
 */

export const messageSymbol = {
  submit: type => `@@SUBMIT/${type}`,
  success: type => `@@SUCCESS/${type}`,
  error: type => `@@ERROR/${type}`
};


/**
 * Home
 */

export const PRINT_HELLO = 'PRINT_HELLO';
export const FETCH_USER_LIST = 'FETCH_USER_LIST';
