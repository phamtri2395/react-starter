/**
 * Configuration for server
 * Each mode using their own Webpack config & environment variables
 */

var environment = require('./environment.config.js');
var webpackDevConfig = require('./webpack.config.dev');
var webpackProdConfig = require('./webpack.config.prod');

exports = module.exports = {};

exports.dev = {
  webpack: webpackDevConfig,
  environment: environment.dev
};

exports.story = {
  environment: environment.story
};

exports.prod = {
  webpack: webpackProdConfig,
  environment: environment.prod
};

exports.server = {
  environment: environment.server
};
