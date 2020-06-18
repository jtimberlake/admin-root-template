const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const DotenvWebpackPlugin = require("dotenv-webpack");
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = (env = 'development') => ({
  entry: path.join(__dirname, '..', 'src', 'index.tsx'),
  resolve: {
    modules: ['src', 'node_modules'],
    extensions: ['.jsx','.js', '.ts', '.tsx', '.css', '.scss'],
  },
  output: {
    path: path.resolve(__dirname, '../public')
  },
  resolve: {
    modules: ['src', 'node_modules'],
    extensions: ['.jsx','.js', '.ts', '.tsx', '.css', '.scss'],
  },
  devtool: 'hidden-source-map',

  module: {
    rules: [
      {
        test: /\.(jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: ['ts-loader'],
      },
      {
        test: /\.(css|scss)$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          {
            loader: 'sass-loader',
            options: {
              includePaths: ['node_modules'],
            },
          },
        ],
      },
    ],
    
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, '..', 'assets', 'index.html'),
      
    }),
    new DotenvWebpackPlugin({
      path: path.join(__dirname, `../env/.env.${env}`)
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
    })
  ],
  
})
