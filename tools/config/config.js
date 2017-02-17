var environment = require('./environment.config.js');
var webpackDevConfig = require('./webpack.config.dev');

exports = module.exports = {};

exports.dev = {
  webpack: webpackDevConfig,
  environment: environment.dev
}
