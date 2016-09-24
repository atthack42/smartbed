var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var config = {

  entry: './src/index.js',

  output: {
    path: 'dist',
    filename: 'index.js'
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.ejs',
      inject: 'body',
    })
  ],

  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015']
        }
      }
    ]
  }
}

module.exports = config;
