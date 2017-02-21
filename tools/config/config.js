var environment = require('./environment.config.js');
var webpackDevConfig = require('./webpack.config.dev');
var webpackProdConfig = require('./webpack.config.prod');

exports = module.exports = {};

exports.dev = {
  webpack: webpackDevConfig,
  environment: environment.dev
};

exports.prod = {
  webpack: webpackProdConfig,
  environment: environment.prod
};
