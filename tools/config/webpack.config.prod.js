/**
 * Webpack configuration in production mode
 * Turn off debug, HMR, print linter's warning,...
 * Fully optimize bundle files & assets
 */

var path = require('path');
const webpack = require('webpack');
const AssetsPlugin = require('assets-webpack-plugin');
const CompressionPlugin = require("compression-webpack-plugin");

// Host
const host = require('./environment.config').prod.host;
// Environment port
const port = require('./environment.config').prod.port;

// Relative paths
const src_path = path.resolve(__dirname, '../../src');
const context = src_path;
const dist_path = path.resolve(__dirname, '../../public/dist');
const publicPath = '/dist/';
const filename = '[name].[hash].js';
const chunkFilename = '[id].[chunkhash].js';
const eslint_path = path.resolve(__dirname, './.eslintrc');

// Check if verbose mode is on
const isVerbose = process.argv.includes('--verbose') || process.argv.includes('-v');
// Babel config
const babelrc = require('./babel.config');
const babelConfig = Object.assign({}, babelrc, {
  babelrc: false,
  cacheDirectory: false,
  presets: babelrc.presets.map(x => x === 'latest' ? ['latest', { es2015: { modules: false } }] : x),
});
// Babel config for production
//babelConfig.presets.unshift("react-hmre");
//babelConfig.plugins.unshift("react-hot-loader/babel");


const config = {
  // The base directory for resolving the entry option
  context: context,

  // The entry point for the bundle
  entry: './app.js',

  // Options affecting the output of the compilation
  output: {
    path: dist_path,
    publicPath: publicPath,
    filename: filename,
    chunkFilename: chunkFilename,
    sourcePrefix: '  '
  },

  // Developer tool to enhance debugging, source maps
  devtool: false,

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

  // Plugins for Webpack compiler
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),

    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"production"',
      __DEV__: false,
    }),

    // Optimize the bundle in release (production) mode
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      compress: {
        warnings: isVerbose,
      },
    }),

    // Deduplication
    new webpack.optimize.DedupePlugin(),

    new webpack.optimize.AggressiveMergingPlugin(),

    // Emit a JSON file with assets paths
    new AssetsPlugin({
      path: dist_path,
      filename: 'assets.json',
      prettyPrint: true
    }),

    new webpack.LoaderOptionsPlugin({
      debug: false,
      minimize: true
    }),

    new CompressionPlugin({
      asset: "[path].gz[query]",
      algorithm: "gzip",
      test: /\.jsx?$|\.html$/,
      threshold: 10240,
      minRatio: 0.8
    })
  ],

  resolve: {
    extensions: ['.js', '.jsx'],
    modules: [
      path.join(__dirname, '../../src'),
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
              sourceMap: false,
              importLoaders: true,
              modules: true,
              localIdentName: '[hash:base64:4]',
              minimize: true
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              config: './postcss.config.js'
            }
          }
        ]
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        loader: 'style-loader!css-loader!sass-loader'
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
