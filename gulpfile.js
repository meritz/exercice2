var gulp = require('gulp');

var sass = require('gulp-sass');

gulp.task('hello', function() {
    console.log('Hello Zell');
  });

  gulp.task('sass', function() {
    return gulp.src('./app/scss/styles.scss') // Gets all files ending with .scss in app/scss and children directories
      .pipe(sass())
      .pipe(gulp.dest('./dist/css'))
  })