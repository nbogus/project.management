'use strict';

var gulp = require('gulp');

var paths = gulp.paths;

gulp.task('watch', ['inject'], function () {
  gulp.watch([
    paths.src + '/*.html',
    paths.src + '/{app,partials}/**/*.less',
    paths.src + '/{app,partials}/**/*.js',
    paths.src + '/{app,partials}/**/*.ts',
    'bower.json'
  ], ['inject']);
});
