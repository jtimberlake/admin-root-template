require('dotenv').config();
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

// console.log(path.join(__dirname, '..', 'src', 'index.jsx'))
module.exports = {
  entry: path.join(__dirname, '..', 'src', 'index.tsx'),
  resolve: {
    modules: ['src', 'node_modules'],
    extensions: ['.jsx','.js', '.ts', '.tsx', '.css', '.scss'],
  },
  module: {
    rules: [
      {
        test: /\.(jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: ['ts-loader'],
      },
    ],
  },
  plugins: [
    new webpack.EnvironmentPlugin({
      AUTH0_AUDIENCE: process.env.AUTH0_AUDIENCE,
      AUTH0_CLIENT_ID: process.env.AUTH0_CLIENT_ID || '',
      AUTH0_DOMAIN: process.env.AUTH0_DOMAIN || '',
      GRAPHQL_ENDPOINT: process.env.GRAPHQL_ENDPOINT || '',
      HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || '',
      HEROKU_SLUG_COMMIT: process.env.HEROKU_SLUG_COMMIT || '',
      NODE_ENV: process.env.NODE_ENV || 'development',
      ROLLBAR_ENABLED: process.env.ROLLBAR_ENABLED || false,
      ROLLBAR_ENV: process.env.ROLLBAR_ENV || '',
      ROLLBAR_POST_CLIENT_TOKEN: process.env.ROLLBAR_POST_CLIENT_TOKEN || '',
      SOURCE_VERSION: process.env.SOURCE_VERSION || '',
    }),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, '..', 'assets', 'index.html'),
      templateParameters: {
        ghost: process.env.GHOST_URL ? `<script src="${process.env.GHOST_URL}"></script>` : '',
      },
    }),
  ],
};
