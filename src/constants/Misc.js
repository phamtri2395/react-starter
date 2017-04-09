/**
 * Miscellaneous constants
 */

export const messageSymbol = {
  submit: type => `@@SUBMIT/${type}`,
  success: type => `@@SUCCESS/${type}`,
  error: type => `@@ERROR/${type}`
};
