/**
 * Standardize type of action using in project
 */

import { messageSymbol } from '../utils/constant';


const ReduxMessage = function(type, payload, dispatch) {
  this.msg = { type, payload };
  this.dispatch = dispatch;

  this.submit = () => {
    this.dispatch({
      type: messageSymbol.submit(this.msg.type),
      payload: this.msg.payload
    });
  };

  this.success = (newPayload) => {
    const mergedPayload = { ...this.msg.payload, ...newPayload };

    this.dispatch({
      type: messageSymbol.success(this.msg.type),
      payload: mergedPayload
    });
  };

  this.error = (errorMessage) => {
    this.dispatch({
      type: messageSymbol.error(this.msg.type),
      payload: errorMessage
    });
  };
};

/** Old codes
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
    const pre = (args && args.length) ? args[0].pre : null;
    const suf = (args && args.length) ? args[0].suf : null;

    // Pre-submit action
    typeof pre === 'function' && pre();

    // Submit action
    typeof submit === 'function' && submit();

    const reduxMsg = action(args);
    reduxMsg.submit(dispatch);

    const promise = (err, res) => {
      if (err) {
        reduxMsg.error(err, dispatch);
      } else {
        reduxMsg.success(res, dispatch, chainAction, cargs);
      }

      // When done, do action
      typeof done === 'function' && done(err, res);

      // Suf-submit action
      typeof suf === 'function' && suf(err, res);
    };

    api(...aargs).do(promise);

    return reduxMsg;
  };
**/

const ChainListPromises = function() {
  this.subcribers = [];

  this.sayHello = () => {
    console.log('Hello World');
  };
};

const ReduxPromise = function(action, message) {
  this.action = action;
  this.message = message;

  this.createPromise = () => (
    new Promise((resolve, reject) => {
      const result = this.action();
      this.message.submit(); // Dispatch submit message

      // Check if action is promise
      const isPromise = typeof result.then === 'function';

      if (isPromise) { // If promise, resolve when promise's done
        result.then((res, err) => {
          console.log(this.message);
          if (err) {
            this.message.error(err); // Dispatch error message

            reject(null, err);
          }

          this.message.success(res); // Dispatch success message

          resolve(res, null);
        });
      } else { // If not promise, return result
        this.message.success(result); // Dispatch success message

        resolve(result);
      }
    })
  );
};

// Inherit from chainListPromises Object
ReduxPromise.prototype = new ChainListPromises();

export const ReduxAction = (type, payload) => action => (...args) => (dispatch) => {
  const promise = new ReduxPromise(
    () => action(...args),
    new ReduxMessage(type, payload, dispatch)
  );

  promise.createPromise();

  return promise;
};
