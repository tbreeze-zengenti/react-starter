import { SitemapConfig } from './sitemap';
import { noIndexField } from '~/schema/fields.schema';

export const sitemapConfig: SitemapConfig = {
  languages: ['en-GB'],
  noIndexField,
  priorityMap: [],
  additions: [],
  excludeContentTypes: [],
  excludePaths: ['/404', '/zenInfo'],
};
