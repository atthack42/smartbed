const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const fileloader = require('file-loader');

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
        test: /\.(png|gif|jpe?g|svg)$/i,
        loader: 'url',
        query: {
          limit: 10000,
        },
      },
      {
        test: /\.scss$/,
        loaders: ["style", "css", "sass"]
      }
    ]
  }
};

module.exports = config;
