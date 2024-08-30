import type { StorybookConfig } from '@storybook/react-webpack5';
const path = require('path');

const config: StorybookConfig = {
  framework: '@storybook/react-webpack5',
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-a11y',
    '@storybook/addon-actions',
    '@storybook/addon-webpack5-compiler-babel',
  ],
  docs: {},
  webpackFinal: async config => {
    config.module?.rules?.push({
      resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx', '.json', '.md'],
        alias: {
          '~': path.resolve(__dirname, '../src/app'),
          app: path.resolve(__dirname, '../src/app'),
          'react-dom': '@hot-loader/react-dom',
        },
      },
    });
    return config;
  },
};

export default config;
