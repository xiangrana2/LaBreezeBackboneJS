// Include gulp
var gulp = require('gulp');

// Include Our Plugins
var stylus = require('gulp-stylus');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');

// Get styles .styl file and render 
gulp.task('styles', function () {
  gulp.src('stylus/styles.styl')
    .pipe(stylus({
      compress: true
    }))
    .pipe(gulp.dest('css'));
});

// Get app.js and main.js to minify
gulp.task('js', function() {
  return gulp.src('js/*.js')
    .pipe(uglify({
      compress: true
    }))
    .pipe(rename({
     extname: '.min.js'
     }))
    .pipe(gulp.dest('js'));
});