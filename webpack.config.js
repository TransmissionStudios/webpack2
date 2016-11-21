const path = require('path');
const HtmlWebpackPlugin =  require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',

  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '',
    filename: 'bundle.js'
  },

  plugins: [
    new HtmlWebpackPlugin({
      inject: 'body',
      template: 'src/index.html'
    })
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

  devServer: {
    contentBase: './src',
    colors: true,
    noInfo: true,
    inline: true,
    historyApiFallback: true
  },
};
