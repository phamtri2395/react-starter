/**
 * Configuration for server
 * Each mode using their own Webpack config & environment variables
 */

var environment = require('./environment.config.js');
var webpackDevConfig = require('./webpack.config.dev');
var webpackProdConfig = require('./webpack.config.prod');
var webpackServerConfig = require('./webpack.config.server');

exports = module.exports = {};

exports.development = {
  webpack: webpackDevConfig,
  environment: environment.development
};

exports.story = {
  environment: environment.story
};

exports.production = {
  webpack: webpackProdConfig,
  environment: environment.production
};

exports.server = {
  webpack: webpackServerConfig,
  environment: environment.server
};
