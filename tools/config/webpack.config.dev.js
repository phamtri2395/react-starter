/**
 * Webpack configuration in development mode
 * Turn on debug, HMR, print linter's warning,...
 * Not optimize bundle files & assets
 */

const path = require('path');
const webpack = require('webpack');
const AssetsPlugin = require('assets-webpack-plugin');

// Host
const host = require('./environment.config').dev.host;
// Environment port
const port = require('./environment.config').dev.port;

// Relative paths
const src_path = path.resolve(__dirname, '../../src');
const context = src_path;
const dist_path = path.resolve(__dirname, '../../dist/public/bundle');
const publicPath = `${host}:${port}/bundle`;
const filename = '[name].js?[hash]';
const chunkFilename = '[id].js?[chunkhash]';
const eslint_path = path.resolve(__dirname, './.eslintrc');

// Check if verbose mode is on
const isVerbose = process.argv.includes('--verbose') || process.argv.includes('-v');
// Hot Module Replacement (HMR)
const useHMR = !!global.HMR;
// Babel config
const babelrc = require('./babel.config');
const babelConfig = Object.assign({}, babelrc, {
  babelrc: false,
  cacheDirectory: useHMR,
  presets: babelrc.presets.map(x => x === 'latest' ? ['latest', { es2015: { modules: false } }] : x),
});
// Babel config for development
babelConfig.presets.unshift("react-hmre");
babelConfig.plugins.unshift("react-hot-loader/babel");


const config = {
  // The base directory for resolving the entry option
  context: context,

  // The entry point for the bundle
  entry: ['react-hot-loader/patch',
          'webpack-hot-middleware/client',
          './app.js'],

  // Options affecting the output of the compilation
  output: {
    path: dist_path,
    publicPath: publicPath,
    filename: filename,
    chunkFilename: chunkFilename,
    sourcePrefix: '  '
  },

  // Developer tool to enhance debugging, source maps
  devtool: 'source-map',

  // Information would be printed to the console
  stats: {
    colors: true,
    reasons: true,
    hash: isVerbose,
    version: isVerbose,
    timings: true,
    chunks: isVerbose,
    chunkModules: isVerbose,
    cached: isVerbose,
    cachedAssets: isVerbose
  },

  // Plugins for Webpack compiler
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"development"',
      __DEV__: true,
    }),

    // Hot Module Replacement (HMR) + React Hot Reload
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),

    // Emit a JSON file with assets paths
    new AssetsPlugin({
      path: dist_path,
      filename: 'assets.json',
      prettyPrint: true
    }),

    new webpack.LoaderOptionsPlugin({
      debug: true,
      minimize: false
    })
  ],

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
        include: src_path,
        enforce: 'pre',
        loader: 'eslint-loader',
        query: {
          configFile: eslint_path
        }
      },
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        options: babelConfig
      },
      {
        test: /\.css/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
              importLoaders: true,
              modules: true,
              localIdentName: '[name]_[local]_[hash:base64:3]',
              minimize: false
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              config: './config/postcss.config.js'
            }
          }
        ]
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        loader: 'style-loader!css-loader?modules!sass-loader'
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg|woff|woff2)$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
        }
      },
      {
        test: /\.(eot|ttf|wav|mp3)$/,
        loader: 'file-loader',
      }
    ]
  }
};

module.exports = config;
