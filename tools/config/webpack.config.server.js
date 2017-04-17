/**
 * Webpack configuration to compile Express server
 * Transform ES6 syntax in Express server file into ES5
 * Fully optimize & bundle
 */

const path = require('path');
const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');

// Relative paths
const src_path = path.resolve(__dirname, '../');
const context = src_path;
const dist_path = path.resolve(__dirname, '../../dist');
const filename = 'server.js';

// Check if verbose mode is on
const isVerbose = process.argv.includes('--verbose') || process.argv.includes('-v');
// Babel config
const babelConfig = require('./babel.config').server;

const config = {
  // The base directory for resolving the entry option
  context: context,

  // The entry point for the bundle
  entry: './express.js',

  // Options affecting the output of the compilation
  output: {
    path: dist_path,
    filename: filename
  },

  // Information would be printed to the console
  stats: {
    colors: true,
    reasons: false,
    hash: isVerbose,
    version: isVerbose,
    timings: true,
    chunks: isVerbose,
    chunkModules: isVerbose,
    cached: isVerbose,
    cachedAssets: isVerbose,
    warnings: false
  },

  resolve: {
    extensions: ['.js', '.jsx'],
    modules: [
      src_path,
      'node_modules'
    ]
  },

  // Options affecting the normal modules
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        options: babelConfig
      }
    ]
  },

  // Compile for usage in a Node.js-like environment
  // Uses Node.js require to load chunks and not touch any built in modules
  target: 'node',

  // Make __dirname available in webpack's bundle
  node: {
    __dirname: true
  },

  // All node modules will no longer be bundled but will be left as require('module')
  externals: [nodeExternals()]
};

module.exports = config;
