const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin =  require('html-webpack-plugin');

module.exports = {
  entry: [
    // For HMR
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:8000',
    'webpack/hot/only-dev-server',

    // App entry point
    './src/index.js'
  ],

  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '',
    filename: 'bundle.js'
  },

  plugins: [
    new HtmlWebpackPlugin({
      inject: 'body',
      template: 'src/index.html'
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin()
  ],

    module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          'babel-loader'
        ]
      }
    ]
  },

  devtool: 'inline-source-map',

  devServer: {
    hot: true,
    contentBase: path.resolve(__dirname, 'dist'),
    publicPath: ''
  }
};
