const context: Record<string, unknown> =
  typeof window != 'undefined' ? window : global;

const defineConfig = require('-/webpack/define-config').build;

Object.entries(defineConfig).map(([key, value]) => {
  context[key] = value;
});

require('./server');
