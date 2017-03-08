//required
var gulp = require('gulp');
var sass = require('gulp-sass');

//tasks
gulp.task('sass', function () {
  return gulp.src("./*.scss")
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest("./"));
});

//watches
gulp.task('sass:watch', function () {
  gulp.watch("./*.scss", ['sass']);
});

//wire up the default task
gulp.task("default", ["sass:watch"]);