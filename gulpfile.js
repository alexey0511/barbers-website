var gulp = require('gulp');
var nunjucksRender = require('gulp-nunjucks-render');
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var minifyCss = require('gulp-minify-css');
var rename = require('gulp-rename');
var webserver = require('gulp-webserver');

var paths = {
  sass: ['./src/scss/**/*.scss']
};

gulp.task('sass', function(done) {
  gulp.src(paths.sass)
    .pipe(sass())
    .pipe(gulp.dest('./dist/css/'))
    .pipe(minifyCss({
      keepSpecialComments: 0
    }))
    .pipe(rename({
      extname: '.min.css'
    }))
    .pipe(gulp.dest('./dist/css/'))
    .on('end', done);
});

gulp.task('html', function() {
  return gulp.src('src/index.html')
    .pipe(nunjucksRender({
      path: ['src/templates/'] // String or Array
    }))
    .pipe(gulp.dest('dist'));
});

gulp.task('js', function() {
  return gulp.src('src/js/**/*.js')
    .pipe(gulp.dest('dist/js'));
});

gulp.task('fonts', function() {
  return gulp.src('src/fonts/**/*.*')
    .pipe(gulp.dest('dist/fonts'));
});
gulp.task('misc', function() {
  return gulp.src('src/assets/**/*.*')
    .pipe(gulp.dest('dist/assets'));
});
gulp.task('vendor', function() {
  return gulp.src('src/vendor/**/*.*')
    .pipe(gulp.dest('dist/js/vendor'));
});


gulp.task('default', ['sass', 'html', 'js', 'fonts', 'misc', 'vendor']);

gulp.task('watch', function() {
  gulp.watch(paths.sass, ['sass']);
  gulp.watch('**/*.js', ['js']);
  gulp.watch('**/*.html', ['html']);
});

gulp.task('webserver', function() {
  gulp.src('dist')
    .pipe(webserver({
      livereload: true,
      directoryListing: false,
      open: true
    }));
  });
