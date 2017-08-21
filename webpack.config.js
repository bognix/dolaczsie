const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './front/app.js',
  output: {
    // TODO be smart about it
    filename: 'dist/bundle.js',
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html',
      inject: 'body',
    }),
  ],
  module: {
    rules: [{
      test: /\.js*/,
      loader: 'babel-loader',
      exclude: /node_modules/,
      query: {
        presets: ['es2015', 'react'],
      },
    }],
  },
};
