// Import feature reducers to be included with application startup
// import { reducer as FormsReducer } from 'zengenti-forms-package';

import SiteConfigReducer from './siteConfig/reducers';

const featureReducers = {
  // form: FormsReducer,
  siteConfig: SiteConfigReducer,
};

export default { ...featureReducers };
