/**
 * Build all files into bundle using Webpack
 * Run in both development & production mode
 * In production mode, bundle will be optimized, compressed & removed HMR, debug
 */

const fs = require('fs');
const path = require('path');
const ejs = require('ejs');
const rimraf = require('rimraf');
const webpack = require('webpack');
const browserSync = require('browser-sync');

// Check if verbose mode is on
const isVerbose = process.argv.includes('--verbose') || process.argv.includes('-v');

// Relative paths
const dist_path = path.resolve(__dirname, '../dist/public/bundle');
const ejs_path = path.resolve(__dirname, '../dist/index.ejs');
const html_path = path.resolve(__dirname, '../dist/public/index.html');

// Hot Module Replacement (HMR)
global.HMR = !process.argv.includes('--no-hmr');

const isDebug = !(process.env.NODE_ENV === 'prod');
const config = (process.env.NODE_ENV === 'prod' || process.env.NODE_ENV ==='server') ? require('./config/config').prod : require('./config/config').dev;
const webpackConfig = config.webpack;

const build = function() {
  // Clean leftover files
  rimraf.sync(webpackConfig.output.path, { nosort: true, dot: true });
  rimraf.sync(html_path, { nosort: true, dot: true });

  // Start webpack dev server
  const compiler = webpack(webpackConfig);

  compiler.run((err, stats) => {
    // Generate index.html page
    const bundle_js = stats.compilation.chunks.find(x => x.name === 'main').files[0];
    const bundle_css = stats.compilation.chunks.find(x => x.name === 'main').files[1];
    const template = fs.readFileSync(ejs_path, 'utf8');
    const render = ejs.compile(template, { filename: ejs_path });
    const output = render({
      debug: isDebug,
      bundle_js: `./bundle/${bundle_js}`,
      bundle_css: `./bundle/${bundle_css}`,
      htmlInjection: null,
      preloadedState: {},
      config
    });
    fs.writeFileSync(html_path, output, 'utf8');

    console.log(stats.toString(webpackConfig.stats));
  });
};

module.exports = build;
