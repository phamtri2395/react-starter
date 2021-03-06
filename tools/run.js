/**
 * Start server with Webpack & browserSync
 * Run in both development & production mode
 * However, this method does not support for server-side rendering
 */

const fs = require('fs');
const path = require('path');
const ejs = require('ejs');
const rimraf = require('rimraf');
const webpack = require('webpack');
const browserSync = require('browser-sync');

// Relative paths
const dist_path = path.resolve(__dirname, '../dist/public/bundle');
const ejs_path = path.resolve(__dirname, '../dist/index.ejs');
const html_path = path.resolve(__dirname, '../dist/public/index.html');

// Hot Module Replacement (HMR)
global.HMR = !process.argv.includes('--no-hmr');

const isDebug = !(process.env.NODE_ENV === 'production');
const config = (process.env.NODE_ENV === 'production') ? require('./config/config').production : require('./config/config').development;
const webpackConfig = config.webpack;

const run = function() {
  // Clean leftover files
  rimraf.sync(webpackConfig.output.path, { nosort: true, dot: true });
  rimraf.sync(html_path, { nosort: true, dot: true });
  // Control Browsersync instances
  let bsCount = 0;
  const bs = browserSync.create();

  // Start webpack dev server
  const compiler = webpack(webpackConfig);
  const webpackDevMiddleware = require('webpack-dev-middleware')(compiler, {
    publicPath: webpackConfig.output.publicPath,
    stats: webpackConfig.stats,
  });

  compiler.plugin('done', (stats) => {
    // Generate index.html page
    const bundle_js = stats.compilation.chunks.find(x => x.name === 'main').files[0];
    const bundle_css = stats.compilation.chunks.find(x => x.name === 'main').files[1];
    const template = fs.readFileSync(ejs_path, 'utf8');
    const render = ejs.compile(template, { filename: ejs_path });
    const output = render({
      debug: true,
      bundle_js: (isDebug) ? `/bundle/${bundle_js}` : `./bundle/${bundle_js}`,
      bundle_css: (isDebug) ? `/bundle/${bundle_css}` : `./bundle/${bundle_css}`,
      htmlInjection: null,
      preloadedState: {},
      config
    });
    fs.writeFileSync(html_path, output, 'utf8');

    // Launch Browsersync after the initial bundling is complete
    if (++bsCount === 1) {
      bs.init({
        port: config.environment.port,
        ui: { port: Number(config.environment.port) + 100 },
        server: {
          baseDir: '../dist/public',
          middleware: [
            webpackDevMiddleware,
            require('webpack-hot-middleware')(compiler),
            require('connect-history-api-fallback')()
          ],
        },
      });
    }
  });
};

module.exports = run;
