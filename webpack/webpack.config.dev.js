const webpack = require('webpack');
const { merge } = require('webpack-merge');
const path = require('path');

const HtmlWebPackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const BASE_CONFIG = require('./webpack.config.base');

const {
  DEFINE_CONFIG,
  DEVSERVER_PROXIES,
  WEBPACK_DEFINE_CONFIG,
} = require('./bundle-info');

const staticFolderPath = DEFINE_CONFIG.production.STATIC_PATH;

const CLIENT_DEV_CONFIG = {
  name: 'webpack-dev-config',
  target: 'web',
  stats: {
    preset: 'errors-only',
  },
  mode: 'development',
  entry: path.resolve(__dirname, '../src/client/client-entrypoint.ts'),
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.(t|j)sx?$/,
        loader: 'esbuild-loader',
        options: {
          loader: 'tsx',
        },
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        type: 'asset/resource',
        generator: {
          filename: `${staticFolderPath}/img/[hash][ext]`,
        },
        use: [
          {
            loader: 'image-webpack-loader',
            options: {
              disable: true,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin(WEBPACK_DEFINE_CONFIG.dev),
    new HtmlWebPackPlugin({
      template: path.resolve(__dirname, '../public/index.html'),
      filename: './index.html',
      chunksSortMode: 'none',
      favicon: path.resolve(__dirname, '../public/icon/icon-dev.svg'),
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          globOptions: { ignore: ['index.html', 'index.ejs'] },
          from: path.resolve(__dirname, '../public'),
          to: path.resolve(__dirname, `../dist/${staticFolderPath}`),
        },
      ],
    }),
  ],
  devServer: {
    host: '0.0.0.0',
    port: '3000',
    hot: true,
    historyApiFallback: true,
    proxy: DEVSERVER_PROXIES,
    open: true,
  },
};

module.exports = merge(BASE_CONFIG, CLIENT_DEV_CONFIG);
