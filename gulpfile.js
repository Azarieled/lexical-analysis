'use strict';
let gulp = require('gulp');
let stylus = require('gulp-stylus');
let watch = require('gulp-watch');

gulp.task('stylesheet', () =>
  gulp.src(['./*.styl', './app/**/*.styl'], {base: "./"})
    .pipe(stylus({
      compress: true
    }))
    .pipe(gulp.dest('./'))
);

gulp.task('watch', function () {
  gulp.watch('./**/*.styl', ['stylesheet']);
});

gulp.task('default', ['stylesheet', 'watch']);
