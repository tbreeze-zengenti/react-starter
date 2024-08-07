const defineConfig = require('./webpack/define-config').build;

const presets = {
  base: [
    [
      '@babel/preset-env',
      {
        corejs: '3',
        loose: true,
        useBuiltIns: 'entry',
      },
    ],
    ['@babel/preset-react', { loose: true }],
    ['@babel/preset-typescript', { allExtensions: true, isTSX: true }],
  ],
  legacy: [],
  modern: [],
};

const plugins = {
  base: [
    [
      'module-resolver',
      {
        root: './src',
        alias: {
          '~': './src/app',
          '-': './',
        },
        cwd: 'packagejson',
      },
    ],
    [
      'babel-plugin-styled-components',
      {
        displayName: true,
        ssr: true,
      },
    ],
    'react-hot-loader/babel',
    '@loadable/babel-plugin',
  ],
  legacy: [],
  modern: [],
};

module.exports = {
  env: {
    legacy: {
      presets: [...presets.base, ...presets.legacy],
      plugins: [...plugins.base, ...plugins.legacy],
    },
    modern: {
      presets: [...presets.base, ...presets.modern],
      plugins: [...plugins.base, ...plugins.modern],
    },
    test: {
      presets: [...presets.base, ...presets.legacy],
      plugins: [
        ...plugins.base,
        ['transform-define', defineConfig],
        'babel-plugin-dynamic-import-node',
        ...plugins.legacy,
      ],
      sourceMaps: 'inline',
      retainLines: true,
      sourceType: 'unambiguous',
    },
  },
  presets: [...presets.base, ...presets.modern],
  plugins: [...plugins.base, ...plugins.modern],
};
