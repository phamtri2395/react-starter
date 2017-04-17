/**
 * Babel config for Webpack
 */

const sass = require('node-sass');

exports = module.exports = {};

const cssPreprocessServer = function(data, file) {
  try {
    return sass.renderSync({ data, file }).css.toString('utf8');
  } catch (e) {
    console.error(e);
  }
};

exports.client = {
  presets: [
    'latest',
    'stage-1',
    'react'
  ],
  plugins: [
    'transform-runtime'
  ]
}

exports.server = {
  presets: [
    'es2015',
    'stage-1',
    'react'
  ],
  'plugins': [[
    'css-modules-transform', {
      'preprocessCss': cssPreprocessServer,
      'generateScopedName': '[hash:8]',
      'extensions': ['.scss']
    }
  ]]
}
