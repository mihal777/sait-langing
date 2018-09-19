var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function() {
  gulp.src('app/scss/app.scss') 
    .pipe(sass())
    .pipe(gulp.dest('app/css'))
})