/**
 * Standardize type of action using in project
 */

import { messageStatus } from '../utils/constant';

export function ReduxMessage(type, payload) {
  this.msg = { type, payload, status: messageStatus.default };

  this.submit = (dispatch) => {
    this.msg.status = messageStatus.submit;

    dispatch(this.msg);
  };

  this.success = (newPayload, dispatch, next, cargs) => {
    if (newPayload) this.msg.payload = newPayload;
    this.msg.status = messageStatus.success;

    if (dispatch) dispatch(this.msg);
    // Callback
    typeof next === 'function' && next(...cargs);
  };

  this.error = (newPayload, dispatch) => {
    if (newPayload) this.msg.payload = newPayload;
    this.msg.status = messageStatus.error;

    if (dispatch) dispatch(this.msg);
  };
}

export const createAction = action => (...args) => (dispatch) => {
  const reduxMsg = action(...args);
  reduxMsg.submit(dispatch);

  reduxMsg.success(null, null);
  return reduxMsg;
};

export const createAjaxAction =
  (action, api, chainAction, ...cargs) => (...aargs) => dispatch => (...args) => {
    const submit = (args && args.length) ? args[0].submit : null;
    const done = (args && args.length) ? args[0].done : null;

    typeof submit === 'function' && submit();

    const reduxMsg = action(args);
    reduxMsg.submit(dispatch);

    const promise = (err, res) => {
      if (err) {
        reduxMsg.error(err, dispatch);
      } else {
        reduxMsg.success(res, dispatch, chainAction, cargs);
      }

      typeof done === 'function' && done();
    };

    api(...aargs).do(promise);

    return reduxMsg;
  };
