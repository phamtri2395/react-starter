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

const ReduxPromise = function(action, message, { pre, suf }) {
  this.action = action;
  this.message = message;
  this.next = null;

  this.createPromise = () => {
    typeof pre === 'function' && pre(); // Calling pre-function

    return new Promise((resolve, reject) => {
      const result = this.action();
      this.message.submit(); // Dispatch submit message

      // Check if action is promise
      const isPromise = result && typeof result.then === 'function';

      if (isPromise) { // If promise, resolve when promise's done
        result.then((res, err) => {
          typeof this.next === 'function' && this.next(res.body, err); // Calling callback

          if (err) {
            this.message.error(err); // Dispatch error message
            typeof suf === 'function' && suf(); // Calling suf-function

            reject(err);
          }

          this.message.success(res.body); // Dispatch success message
          typeof suf === 'function' && suf(); // Calling suf-function

          resolve(res.body);
        });
      } else { // If not promise, return result
        typeof this.next === 'function' && this.next(result, null); // Calling callback

        this.message.success(result); // Dispatch success message
        typeof suf === 'function' && suf(); // Calling suf-function

        resolve(result, null);
      }
    });
  };

  this.then = (next) => {
    if (typeof next === 'function') this.next = next;
  };
};

export const ReduxAction =
  (type, payload) => action => (...args) => dispatch => ({ pre, suf } = {}) => {
    const promise = new ReduxPromise(
      () => action(...args),
      new ReduxMessage(type, payload, dispatch),
      { pre, suf }
    );

    promise.createPromise();

    return promise;
  };
