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

export const createAjaxAction = (action, api, chainAction, ...cargs) => (...args) => (dispatch) => {
  const reduxMsg = action();
  reduxMsg.submit(dispatch);

  const promise = (err, res) => {
    if (err) reduxMsg.error(err, dispatch);

    reduxMsg.success(res, dispatch, chainAction, cargs);
  };

  api(...args).do(promise);

  return reduxMsg;
};
