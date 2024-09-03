import type { ContentTypeSiteConfiguration } from '~/models/contentTypes/siteConfiguration.type';

export type SiteConfigMappedProps = {
  title: string;
};

export const siteConfigMapper = (
  config: ContentTypeSiteConfiguration
): SiteConfigMappedProps => {
  return {
    title: config.entryTitle,
  };
};
