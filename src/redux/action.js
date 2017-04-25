/**
 * Standardize type of action using in project
 */

import { messageSymbol } from '../constants/Misc';


function ReduxMessage(type, payload, dispatch) {
  this.msg = { type, payload };
  this.dispatch = dispatch;

  this.submit = () => {
    this.dispatch({
      type: messageSymbol.submit(this.msg.type),
      payload: this.msg.payload
    });
  };

  this.success = (newPayload) => {
    this.dispatch({
      type: messageSymbol.success(this.msg.type),
      payload: newPayload
    });
  };

  this.error = (errorMessage) => {
    this.dispatch({
      type: messageSymbol.error(this.msg.type),
      payload: errorMessage
    });
  };
}

function ReduxPromise(action, message) {
  this.action = action;
  this.message = message;
  this.prev = null;
  this.next = null;
  this.fulfilled = false; // fulfilled flag

  this.createPromise = () => {
    typeof this.prev === 'function' && this.prev(); // Calling prev function

    return new Promise((resolve, reject) => {
      const result = this.action ? this.action() : this.message.msg.payload;
      this.message.submit(); // Dispatch submit message

      // Check if action is promise
      const isPromise = result && typeof result.then === 'function';

      if (isPromise) { // If promise, resolve when promise's done
        result.then((res, err) => {
          if (err) {
            // Set promise status as fulfilled state
            this.fulfilled = true;

            this.message.error(err); // Dispatch error message

            typeof this.next === 'function' && this.next(null, err); // Calling next function

            reject(err);
          }

          // Set promise status as fulfilled state
          this.fulfilled = true;

          this.message.success(res.body); // Dispatch success message

          typeof this.next === 'function' && this.next(res.body, null); // Calling next function

          resolve(res.body);
        });
      } else { // If not promise, return result
        // Set promise status as fulfilled state
        this.fulfilled = true;

        this.message.success(result); // Dispatch success message

        typeof this.next === 'function' && this.next(result, null); // Calling next function

        resolve(result, null);
      }
    });
  };

  this.then = (next) => {
    if (typeof next === 'function') this.next = next;
  };

  this.before = (prev) => {
    if (typeof prev === 'function') this.prev = prev;
  };
}

export const ReduxAction =
  (type, payload) => action => (...args) => (dispatch) => {
    const promise = new ReduxPromise(
      () => action(...args),
      new ReduxMessage(type, payload, dispatch)
    );

    const execPromise = () => {
      promise.createPromise();

      return promise;
    };

    execPromise.promise = promise;

    execPromise.prev = (prev) => {
      typeof prev === 'function' && promise.before(prev);

      return execPromise;
    };

    execPromise.next = (next) => {
      typeof next === 'function' && promise.then(next);

      return execPromise;
    };

    execPromise.all = () => {
      let lastPromise = promise;

      // Find last promise in chain
      while (lastPromise.next && lastPromise.next.promise) {
        lastPromise = lastPromise.next.promise;
      }

      // Exec current promise before return last promise
      execPromise();
      return lastPromise;
    };

    return execPromise;
  };
