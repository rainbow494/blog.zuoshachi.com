var gulp = require('gulp');
var less = require('gulp-less');
var util = require('gulp-util');
var sourcemaps = require('gulp-sourcemaps');

gulp.task('less', function () {
  return gulp.src(['main.less'])
    .pipe(sourcemaps.init())
    .pipe(less().on('error', util.log))
    .on('error', function (error) {
        console.log(error.message);
    })
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('./'));
});