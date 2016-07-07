var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var LiveReloadPlugin = require('webpack-livereload-plugin');

module.exports = {
  entry: {
    app: [
      './src/main.js'
    ]
  },

  output: {
    path: './build',
    filename: '[name].js'
  },

  sassLoader: {
    includePaths: './src/styles'
  },

  module: {
    loaders: [
      {
        test: /\.js|jsx$/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react']
        }
      },
      {
        test: /\.scss$/,
        loader: 'style!css?modules&localIdentName=[local]!sass?sourceMap'
      },
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      inject: 'body'
    }),
    new LiveReloadPlugin({
      appendScriptTag: true
    })
  ],

  devServer: {
    contentBase: './build'
  }
}
