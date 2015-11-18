var gulp = require('gulp');
var nodemon = require('gulp-nodemon');
var eslint = require('gulp-eslint');
var jscs = require('gulp-jscs');
var mocha = require('gulp-mocha');

gulp.task('default', function() {
  nodemon({
    script: 'src/server/server.js',
    ext: 'js html',
    env: {
      'NODE_ENV': 'development'
    }
  });
});

gulp.task('lint', function() {
  return gulp.src(['src/**/*.ts', 'src/**/*.js'])
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failOnError());
});

gulp.task('style', function() {
  return gulp.src(['src/**/*.ts', 'src/**/*.js'])
    .pipe(jscs())
    .pipe(jscs.reporter());
});

gulp.task('test', function() {
  return gulp.src(['src/tests/**.js'], {
    read: false
  }).pipe(mocha({
    reporter: 'nyan'
  }));
});
