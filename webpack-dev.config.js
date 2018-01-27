const path = require('path')
const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  entry: [
    path.resolve(__dirname, 'client/index.js')
  ],

  resolve: {
    alias: {
      Component: path.resolve(__dirname, 'client', 'components'),
      Container: path.resolve(__dirname, 'client', 'containers'),
      Style: path.resolve(__dirname, 'client', 'styles')
    }
  },

  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname + '/public'),
    publicPath: '/'
  },

  devtool: 'inline-source-map',

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2016', 'react']
        }
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('css-loader!sass-loader')
      },
      {
        test: /\.css/,
        loader: ['style-loader', 'css-loader']
      }
    ]
  },

  plugins: [
    new webpack.ProvidePlugin({
      'React': 'react',
      'ReactDOM': 'react-dom'
    }),

    new ExtractTextPlugin('style.css')
  ]
}
