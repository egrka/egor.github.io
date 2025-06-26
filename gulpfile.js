const gulp = require('gulp');
const fileInclude = require('gulp-file-include');
const htmlmin = require('gulp-htmlmin');
const cleanCSS = require('gulp-clean-css');
const concat = require('gulp-concat');
const terser = require('gulp-terser');
const sourcemaps = require('gulp-sourcemaps');
const { deleteAsync } = require('del');

// Очистка dist
gulp.task('clean', () => {
  return deleteAsync(['dist']);
});

// HTML
gulp.task('html', () => {
  return gulp.src('src/html/*.html')
    .pipe(fileInclude({
      prefix: '@@',
      basepath: 'src/html/parts/'
    }))
    .pipe(htmlmin({
      collapseWhitespace: true,
      removeComments: true
    }))
    .pipe(gulp.dest('dist'));
});

// CSS
gulp.task('css', () => {
  return gulp.src([
    'src/css/reset.css',
    'src/css/style.css'
  ])
    .pipe(sourcemaps.init())
    .pipe(concat('style.min.css'))
    .pipe(cleanCSS())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('dist/css'));
});

// JS
gulp.task('js', () => {
  return gulp.src([
    'src/js/main.js',
    'src/js/menu.js'
  ])
    .pipe(sourcemaps.init())
    .pipe(concat('main.min.js'))
    .pipe(terser())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('dist/js'));
});

// Сборка по умолчанию
gulp.task('default', gulp.series('clean', 'html', 'css', 'js'));