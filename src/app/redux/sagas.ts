import type { ForkEffect } from '@redux-saga/core/effects';
// Import feature sagas to be included with application startup
// import { sagas as formSagas } from 'zengenti-forms-package';

const featureSagas = [
  // ...formSagas
] as ForkEffect[];

export default featureSagas;
