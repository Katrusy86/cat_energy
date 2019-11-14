var gulp = require('gulp');
var less = require('gulp-less');
var plumber = require('gulp-plumber');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var server = require('browser-sync').create();
var concat = require('gulp-concat');
var minify = require('gulp-minify');

gulp.task('style', function () {
  return gulp.src("less/base.less")
    .pipe(plumber())
    .pipe(less())
    .pipe(minify())
    .pipe(concat('styles.min.css'))
    .pipe(postcss([
      autoprefixer()
    ]))
    .pipe(gulp.dest('styles'))
    .pipe(server.stream());
});

gulp.task('serve', function(){
  server.init({
    server:'.',
    notify:false,
    open:true,
    cors:true,
    ui:false
  });

  gulp.watch('less/**/*.less', gulp.series('style'));
  gulp.watch('*.html').on('change',server.reload);
});

