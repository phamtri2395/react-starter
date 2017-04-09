/**
 * Styleguidist config
 */

const path = require('path');
const glob = require('glob');
const environment = require('./config').story.environment;
const packageName = require('../../package.json').name;

const src_path = path.resolve(__dirname, '../../src');
const lookup_extension = 'jsx';
const stories_extension = 'story.md';
const stories_path = path.resolve(__dirname, '../../documents/stories');

module.exports = {
  title: `${packageName} Stories`,
  serverHost: environment.host,
  serverPort: environment.port,
  webpackConfig: require('./webpack.config.dev'),
  skipComponentsWithoutExample: false,
  components: () => {
    // Find all components folder in src/components/**/*.jsx & src/containers/**/components/**/*.jsx
    const abs_path = glob.sync(`${src_path}/components/**/*.${lookup_extension}`).concat(
      glob.sync(`${src_path}/containers/**/components/**/*.${lookup_extension}`)
    );
    // Turn absolute paths to relative path, which works with styleguide config
    const rel_path = abs_path.map(dir => (
      path.relative(__dirname, dir)
    ));

    return rel_path;
  }, // Where to look for components
  getExampleFilename: function(componentPath) {
    const filename = path.basename(componentPath, `.${lookup_extension}`);

    return path.join(`${stories_path}`, `${filename}.${stories_extension}`);
  },
  assetsDir: '../../public', // Assets folder
  styleguideDir: '../../public/story' // Build destination
};
