/**
 * Call AJAX here
 */

import request from 'superagent';

export default function Ajax({ method, url, requestTimeout, headers = {}, body = {} }) {
  this.method = method.toLowerCase();
  this.url = url;
  this.headers = headers;
  this.body = body;

  this.then = next => (
    request[this.method](this.url)
      .timeout(requestTimeout)
      .send(this.body)
      .set(this.headers)
      .end((err, res) => {
        // Callback
        typeof next === 'function' && next(res, err);

        return (res, err);
      })
  );
}
