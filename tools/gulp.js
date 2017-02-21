/**
 * Tasks runner
 */

const gulp = require('gulp');
const run = require('./run');
const build = require('./build');

gulp.task('run', run);
gulp.task('build', build);
