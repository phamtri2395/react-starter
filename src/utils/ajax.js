/**
 * Call AJAX here
 */

import request from 'superagent';

export default function Ajax({ method, url, headers = {}, body = {} }) {
  this.method = method.toLowerCase();
  this.url = url;
  this.headers = headers;
  this.body = body;

  this.do = next => (
    request[this.method](this.url)
    .send(this.body)
    .set(this.headers)
    .end((err, res) => {
      // Callback
      typeof next === 'function' && next(err, res);

      return ({ err, res });
    })
  );
}
