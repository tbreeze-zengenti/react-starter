import { SiteConfigState } from './reducers';

export const hasSiteConfig = (state: SiteConfigState) => {
  return state.config?.isReady;
};
