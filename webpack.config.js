var webpack = require('webpack');
var path = require('path');
var CleanWebpackPlugin = require('clean-webpack-plugin');

const PATHS = {
  build: path.join(__dirname, 'dist'),
  context: path.join(__dirname, '/src'),
  app: path.join(__dirname, '/src/index.js'),
  html: path.join(__dirname, '/src/index.html'),
  vendor: ['react', 'react-redux', 'redux']
}

const ENV = process.argv[2] || '--dev';
const IS_PROD = ENV === '--prod';


module.exports = {
  context: PATHS.context,
  entry: {
    jsx: PATHS.app,
    html: PATHS.html,
    vendor: PATHS.vendor,
  },
  devtool: IS_PROD ? 'cheap-module-source-map' : 'eval',
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  output: {
    path: PATHS.build,
    filename: 'bundle.js'
  },
  plugins: IS_PROD ? [
      new CleanWebpackPlugin(['dist', 'coverage'], {
        root: PATHS.context,
        verbose: true,
        dry: false
      }),
      new webpack.optimize.CommonsChunkPlugin({
        name: 'vendor',
        minChunks: Infinity,
        filename: 'vendor.bundle.js'
      }),
      new webpack.optimize.UglifyJsPlugin({
        compress: {
          warnings: false
        },
        sourceMap: true,
        mangle: false
      }),
      new webpack.DefinePlugin({
        'process.env' : {
          'NODE_ENV': JSON.stringify('production')
        }
      })
    ] : [
      new webpack.optimize.CommonsChunkPlugin({
        name: 'vendor',
        minChunks: Infinity,
        filename: 'vendor.bundle.js'
      }),
    ],
  module: {
    loaders: [
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: "url-loader?limit=10000&mimetype=application/font-woff"
      },
      {
        test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: "file-loader"
      },
      {
        test: /\.(scss|less|css)$/,
        loaders: ['style', 'css?sourceMap', 'sass?sourceMap']
      },
      {
        test: /\.html$/,
        loader: 'file?name=[name].[ext]'
      },
      // setup jsx, also accept js
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loaders: [
          'react-hot',
          'babel-loader'
        ]
      }
    ]
  },
  sassLoader: {
    includePaths: [PATHS.styles]
  },
  devServer: {
    contentBase: PATHS.context,
    hot: true
  }
};
