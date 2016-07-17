const gulp = require('gulp');
const karma = require('karma');

gulp.task('spec-serve', (cb) => {
  var server = new karma.Server({
    configFile: __dirname + '/karma.conf.js',
    singleRun: false
  }, cb);
  server.start()
});

gulp.task('spec', (cb) => {
  var server = new karma.Server({
    configFile: __dirname + '/karma.conf.js',
    singleRun: true
  }, cb);
  server.start()
});
