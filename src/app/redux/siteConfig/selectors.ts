import { ReduxState } from '../redux.type';

export const hasSiteConfig = (state: ReduxState) => {
  return state?.siteConfig?.isReady;
};

export const selectTitle = (state: ReduxState) => {
  return state?.siteConfig?.title;
};
