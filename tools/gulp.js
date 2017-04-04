/**
 * Using gulp as a task runner
 */

const gulp = require('gulp');
const run = require('./run');
const build = require('./build');
const reactDocgen = require('./docgen/react');

gulp.task('run', run);
gulp.task('build', build);
gulp.task('doc-react-component', reactDocgen.component);
