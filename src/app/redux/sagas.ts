// import { sagas as formSagas } from 'zengenti-forms-package';

import { SiteConfigSagas } from './siteConfig/sagas';

const featureSagas = [
  // ...formSagas
  ...SiteConfigSagas,
] as any[];

export default featureSagas;
