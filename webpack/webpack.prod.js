require('dotenv').config();
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

const plugins = [
  new MiniCssExtractPlugin({
    filename: '[name].[hash:8].css',
    chunkFilename: '[id].[hash:8].css',
  }),
  new webpack.IgnorePlugin({
    resourceRegExp: /^\.\/locale$/,
    contextRegExp: /moment$/,
  }),
];

if (
  process.env.ROLLBAR_ACCESS_TOKEN &&
  (process.env.SOURCE_VERSION || process.env.HEROKU_SLUG_COMMIT)
) {
  plugins.push(
    new RollbarSourceMapPlugin({
      accessToken: process.env.ROLLBAR_ACCESS_TOKEN || null,
      version: process.env.SOURCE_VERSION || process.env.HEROKU_SLUG_COMMIT || null,
      publicPath: determineHostname(),
    })
  );
}

module.exports = {
  mode: 'production',
  output: {
    path: path.join(__dirname, '..', 'public'),
    filename: '[name].[hash:8].js',
  },
  devtool: 'hidden-source-map',
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
  plugins,
};
