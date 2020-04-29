require('dotenv').config();
const path = require('path');
const webpack = require('webpack');

module.exports = {
  mode: 'development',
  devtool: 'hidden-source-map',
  output: {
    filename: '[name].js',
    path: path.join(__dirname, '..', 'src'),
    chunkFilename: '[name].js',
    publicPath: '/',
  },
  resolve: {
    alias: {
      'react-dom': '@hot-loader/react-dom',
    },
  },
  devServer: {
    contentBase: path.join(__dirname, '..', 'src'),
    port: process.env.PORT || 8080,
    historyApiFallback: true,
    hot: true,
    compress: true,
  },
  module: {
    rules: [
      {
        test: /\.(css|scss)$/,
        use: [
          'style-loader',
          'css-loader',
          'postcss-loader',
          {
            loader: 'sass-loader',
            options: {
              includePaths: [path.join(__dirname, '..', 'node_modules')],
            },
          },
        ],
      },
    ],
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
};
