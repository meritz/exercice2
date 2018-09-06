var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var sass = require('gulp-sass');

gulp.task('hello', function() {
    console.log('Hello Zell');
  });

  // Compile sass into CSS 
// gulp.task('sass', function() {
//   return gulp.src('./app/scss/styles.scss') // Gets all files ending with .scss in app/scss and children directories
//     .pipe(sass())
//     .pipe(gulp.dest('./dist/css'))
// });

  // Static Server + watching scss/html files
gulp.task('serve', ['sass'], function() {
  browserSync.init({
      server: "./app"
  });

  gulp.watch("app/scss/*.scss", ['sass']);
  gulp.watch("app/*.html").on('change', browserSync.reload);
});

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function() {
  return gulp.src("app/scss/*.scss")
      .pipe(sass())
      .pipe(gulp.dest("app/css"))
      .pipe(browserSync.stream());
});



gulp.task('default', ['serve']);