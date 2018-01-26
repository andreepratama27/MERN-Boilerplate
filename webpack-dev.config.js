const path = require('path')
const webpack = require('webpack')

module.exports = {
  entry: [
    path.resolve(__dirname, 'client/index.js')
  ],

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
      }
    ]
  },

  plugins: [
    new webpack.ProvidePlugin({
      'React': 'react',
      'ReactDOM': 'react-dom'
    })
  ]
}
