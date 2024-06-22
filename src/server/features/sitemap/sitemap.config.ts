import { SitemapConfig } from './sitemap';
import { contentTypes } from '~/schema/contentTypes.schema';
import { noIndexField } from '~/schema/fields.schema';

export const sitemapConfig: SitemapConfig = {
  languages: ['en-GB', 'fr-FR'],
  noIndexField,
  priorityMap: [
    {
      url: '/',
      priority: 1,
      changefreq: 'weekly',
    },
    {
      url: contentTypes.contentPage,
      priority: 0.5,
    },
  ],
  additions: [],
  exclusions: ['/404', '/zenInfo'],
};
