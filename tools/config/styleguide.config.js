/**
 * Styleguidist config
 */

const path = require('path');
const environment = require('./config').story.environment;
const packageName = require('../../package.json').name;

const lookup_extension = 'jsx';
const stories_extension = 'story.md';
const stories_path = path.resolve(__dirname, '../../documents/stories');

module.exports = {
  title: `${packageName} Stories`,
  serverHost: environment.host,
  serverPort: environment.port,
  webpackConfig: require('./webpack.config.dev'),
  components: `../../src/components/**/*.${lookup_extension}`, // Where to look for components
  getExampleFilename: function(componentPath) {
    const filename = path.basename(componentPath, `.${lookup_extension}`);

    return path.join(`${stories_path}`, `${filename}.${stories_extension}`);
  },
  assetsDir: '../../public', // Assets folder
  styleguideDir: '../../public/story' // Build destination
};
