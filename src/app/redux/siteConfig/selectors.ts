import { ReduxState } from '../redux.type';

export const selectSiteConfig = (state: ReduxState) => {
  return state?.siteConfig;
};

export const selectSiteConfigReady = (state: ReduxState) => {
  return selectSiteConfig(state)?.isReady;
};

export const selectSiteConfigEntry = (state: ReduxState) => {
  return selectSiteConfig(state)?.mappedEntry;
};
