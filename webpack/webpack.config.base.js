const webpack = require('webpack');
const path = require('path');

const ESLintPlugin = require('eslint-webpack-plugin');

const { DEFINE_CONFIG, WEBPACK_DEFINE_CONFIG } = require('./bundle-info');

const ASSET_PATH = '/';
const staticFolderPath = DEFINE_CONFIG.production.STATIC_PATH;

module.exports = {
  output: {
    publicPath: ASSET_PATH,
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
    alias: {
      '~': path.resolve(__dirname, '../src/app'),
      '-': path.resolve(__dirname, '../'),
      'react-dom': '@hot-loader/react-dom',
    },
  },
  module: {
    rules: [
      {
        test: /\.(gif|png|jpe?g|svg|ico)$/i,
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
    new ESLintPlugin(),
    new webpack.DefinePlugin(WEBPACK_DEFINE_CONFIG.base),
  ],
};
