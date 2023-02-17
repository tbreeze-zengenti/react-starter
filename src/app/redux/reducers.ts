// Import feature reducers to be included with application startup
// import { reducer as FormsReducer } from 'zengenti-forms-package';

import SiteConfigReducer from './siteConfig/reducers';
import configSlice from './siteConfig/config.slice';

const featureReducers = {
  // form: FormsReducer,
  // siteConfig: SiteConfigReducer,
  config: configSlice,
};

export default { ...featureReducers };
