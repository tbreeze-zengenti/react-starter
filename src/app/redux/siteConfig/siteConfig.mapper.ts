import type { ContentTypeSiteConfiguration } from '~/types/contentTypes/siteConfiguration.type';

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
