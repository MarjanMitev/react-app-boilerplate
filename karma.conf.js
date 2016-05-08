var webpack = require('webpack');

module.exports = function (config) {
   config.set({
      browsers: [ 'Chrome' ], //run in Chrome
      singleRun: true, //just run once by default
      frameworks: ['mocha'], //use the mocha test framework
      files: [
       'tests/index.js'
      ],
      preprocessors: {
       'tests/index.js': ['webpack', 'sourcemap', 'coverage']
     },
     reporters: ['mocha', 'coverage'], //report results in this format
     webpack: {
       devtool: 'inlne-source-map',
       module: {
         loaders: [ {test: /.\jsx?$/, exclude: /node_modules/, loaders: ['babel']} ]
       },
       resolve: {
          modulesDirectories: [
            'src',
            'node_modules'
          ],
          extensions: ['', '.js', '.jsx']
       },
       watch: true
     },
     coverageReporter: {
        type : 'html',
        dir : 'coverage/'
     },
     webpackServer: {
       noInfo: true
     }
   });
};
