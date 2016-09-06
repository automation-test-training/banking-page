var path = require('path');

module.exports = function (config) {
  config.set({

    basePath: '',

    // https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome'],

    // https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['mocha', 'sinon-chai'],

    files: [
      '../www/lib/ionic/js/ionic.bundle.js',
      '../www/lib/babel-polyfill/browser-polyfill.js',
      '../src/spec/index.js',
    ],

    // https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      '../src/spec/index.js': ['webpack', 'sourcemap'],
    },

    webpack: {
      devtool: 'inline-source-map',
      module: {
        loaders: [{
          test: /\.spec\.js$/,
          loader: 'babel-loader',
          include: [path.resolve('src/spec')]
        }, {
          test: /\.js$/,
          loader: 'isparta-loader',
          exclude: /\.spec\.js$/,
          include: [path.resolve('src')]
        }, {
          test: /\.html$/,
          loader: 'html'
        }]
      },
      stats: {
        colors: true
      }
    },

    webpackServer: {
      noInfo: true
    },

    // https://www.npmjs.com/browse/keyword/karma-reporter
    reporters: ['mocha', 'coverage'],

    // setup code coverage
    coverageReporter: {
      reporters: [{
        type: 'text-summary',
      }, {
        type: 'html',
        dir: 'reports/coverage/'
      }]
    },

  });
};
