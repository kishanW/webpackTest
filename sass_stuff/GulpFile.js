//required
var gulp = require('gulp');
var sass = require('gulp-sass');

//tasks
gulp.task('sass', function () {
  return gulp.src("dev/sass/**/*.scss")
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest("dist/css"));
});

//watches
gulp.task('sass:watch', function () {
  gulp.watch("dev/sass/**/*.scss", ['sass']);
});

//wire up the default task
gulp.task("default", ["sass:watch"]);