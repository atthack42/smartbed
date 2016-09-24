const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {

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
      },
      {
        test: /\.scss$/,
        loaders: ["style", "css", "sass"]
      }
    ]
  }
};

module.exports = config;
