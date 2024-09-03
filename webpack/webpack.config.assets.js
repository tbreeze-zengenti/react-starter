const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ImageminPlugin = require('imagemin-webpack-plugin').default;

/**
 * An optional Webpack config for optimising static image assets (jpg, png, etc.)
 * Optimisation is NOT included in ANY build stage by default
 * @tutorial To enable optimisation, simply amend the `build:ci` script in package.json to:
 * "build:ci", "npm run build && npm run build:assets"
 */
const PROCESS_PUBLIC_ASSETS_CONFIG = {
  name: 'public-assets-config',
  mode: 'production',
  stats: {
    preset: 'errors-only',
  },
  entry: './public',
  output: {
    path: path.resolve(__dirname, '../dist'),
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        {
          globOptions: {
            ignore: ['index.html', 'index.ejs'],
          },
          from: path.resolve(__dirname, '../public'),
          to: path.resolve(__dirname, `../dist/static`),
        },
      ],
    }),
    new ImageminPlugin({
      test: /\.(jpe?g|png|gif|svg)$/i,
      optipng: {
        optimizationLevel: 9,
      },
    }),
  ],
};

module.exports = PROCESS_PUBLIC_ASSETS_CONFIG;
