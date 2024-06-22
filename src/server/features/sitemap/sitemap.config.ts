import { SitemapConfig } from './sitemap';
import { contentTypes } from '~/schema/contentTypes.schema';
import { noIndexField } from '~/schema/fields.schema';

export const sitemapConfig: SitemapConfig = {
  languages: ['en-GB'],
  noIndexField,
  priorityMap: [
    {
      path: '/',
      priority: 1,
      changefreq: 'weekly',
    },
    {
      path: contentTypes.contentPage,
      priority: 0.5,
    },
  ],
  exclusions: ['/404', '/zenInfo'],
};
