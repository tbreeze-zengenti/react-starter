import type { ForkEffect } from '@redux-saga/core/effects';

import { SiteConfigSagas } from './siteConfig/sagas';

const featureSagas = [...SiteConfigSagas] as ForkEffect[];

export default featureSagas;
