require('dotenv').config({ path: path.resolve('../env/.env.production')});
const webpack = require('webpack');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserJSPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const RollbarSourceMapPlugin = require('rollbar-sourcemap-webpack-plugin');

const determineHostname = () => {
  const host = process.env.HEROKU_APP_NAME || '';
  return process.env.HOSTNAME ? process.env.HOSTNAME : `https://${host}.herokuapp.com`;
};
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');


// TODO: Rollbar config

// if (
//   process.env.ROLLBAR_ACCESS_TOKEN
// ) {
//   plugins.push(
//     new RollbarSourceMapPlugin({
//       accessToken: process.env.ROLLBAR_ACCESS_TOKEN || null,
//       version: process.env.SOURCE_VERSION || process.env.HEROKU_SLUG_COMMIT || null,
//       publicPath: determineHostname(),
//     })
//   );
// }

module.exports = {
  mode: 'production',
  optimization: {
    minimizer: [new TerserJSPlugin(), new OptimizeCSSAssetsPlugin()],
  },
  module: {
    rules: [
      {
        test: /\.(css|scss)$/,
        use: [
          MiniCssExtractPlugin.loader,
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
  plugins: [
    new OptimizeCSSAssetsPlugin(),
    new MiniCssExtractPlugin({
      filename: '[name].[hash:8].css',
      chunkFilename: '[id].[hash:8].css',
    })
  ]
};
