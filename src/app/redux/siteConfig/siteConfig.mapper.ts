import { ContentTypeSiteConfiguration } from '~/models/contentTypes/siteConfiguration.type';
import { SiteConfigState } from './reducers';

export const SiteConfigMapper = (
  config: ContentTypeSiteConfiguration
): Omit<SiteConfigState, 'isReady' | 'isError' | 'error'> => {
  return {
    title: config.entryTitle,
  };
};
