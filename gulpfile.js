const gulp  = require('gulp'),
      $     = require('gulp-load-plugins')();

gulp.task('html', () => {
  return gulp
    .src([
      'src/nunjucks/*.html',
      '!src/nunjucks/_*.html'
    ])
    .pipe($.nunjucksRender({
      path: ['src/nunjucks/']
    }))
    .pipe(gulp.dest('dist'));
})
