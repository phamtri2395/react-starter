/**
 * Doc generation for React component
 * Generate files in folder ../../document/components
 */

const path = require('path');
const fs = require('fs');
const glob = require('glob');
const reactDocgen = require('react-docgen');
const generateMarkdown = require('./toMarkdown').react;

const components_dir = path.resolve(__dirname, '../../src/components');
const components_doc_dir = path.resolve(__dirname, '../../documents/components');

exports = module.exports = {};

// Read dir recursively & filter with extension
const readDir = function(dirname, extension) {
  return new Promise(function(resolve, reject) {
    glob(`${dirname}/**/*.${extension}`, function(err, files) {
      if (err) reject(err);

      resolve(files);
    });
  });
};

exports.component = function() {
  const filter_extension = 'jsx';

  readDir(components_dir, filter_extension).then(function(files) {
    files.forEach(function(file) {
      const component = fs.readFileSync(file);

      const docContent = reactDocgen.parse(component);
      const docName = path.basename(file, `.${filter_extension}`);

      // Generate markdown from doc
      const markdownContent = generateMarkdown(docName, docContent);

      fs.writeFileSync(`${components_doc_dir}/${docName}.md`, markdownContent);
    });
  });
};
