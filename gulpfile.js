const gulp  = require('gulp'),
      $     = require('gulp-load-plugins')(),
      sync  = require('browser-sync');

gulp.task('html', () => {
  return gulp
    .src([
      'src/nunjucks/*.njk',
      '!src/nunjucks/_*.njk'
    ])
    .pipe($.data( ()=> {
      return require('./src/json/data.json')
    }))
    .pipe($.nunjucksRender({
      path: ['src/nunjucks/']
    }))
    .pipe(gulp.dest('dist'));
})

gulp.task('server', (done) => {
  sync.init({
    server: {
      baseDir: './dist/'
    }
  });
  done();
})

gulp.task('watch', (done) => {
  const reload = () => {
    sync.reload();
    done();
  }
  gulp.watch('src/nunjucks/*.njk').on('change', gulp.series('html', reload));
})

gulp.task('default', gulp.series('html', 'server', 'watch'))
