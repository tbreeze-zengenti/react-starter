const context: Record<string, unknown> =
  typeof window != 'undefined' ? window : global;

import { build as defineConfig } from '-/webpack/define-config';

Object.entries(defineConfig).map(([key, value]) => {
  context[key] = value;
});

import './server';
