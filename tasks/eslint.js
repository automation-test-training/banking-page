const gulp = require('gulp');
const eslint = require('gulp-eslint');
const reporter = require('eslint-html-reporter');
const path = require('path');
const fs = require('fs');

gulp.task('eslint', () => {
  return gulp.src(['./src/**/*.js'])
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.format(reporter, (results) => {
        fs.writeFileSync(path.join(__dirname, '../reports', 'eslint.html'), results);
      })
    );
});
