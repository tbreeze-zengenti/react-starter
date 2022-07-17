// Import feature sagas to be included with application startup
// import { sagas as formSagas } from 'zengenti-forms-package';

import { SiteConfigSagas } from './siteConfig/sagas';

const featureSagas = [
  // ...formSagas
  ...SiteConfigSagas,
] as any[];

export default featureSagas;
