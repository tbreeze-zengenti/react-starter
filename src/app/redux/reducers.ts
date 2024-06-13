// import SiteConfigReducer from './siteConfig/reducers';

import siteConfigSlice from './siteConfig/siteConfig.slice';

const featureReducers = {
  siteConfig: siteConfigSlice,
};

export default { ...featureReducers };
