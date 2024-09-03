export const sys = {
  availableLanguages: 'sys.availableLanguages',
  contentTypeId: 'sys.contentTypeId',
  id: 'sys.id',
  language: 'sys.language',
  isPublished: 'sys.isPublished',
  published: 'sys.version.published',
  slug: 'sys.slug',
  uri: 'sys.uri',
  versionStatus: 'sys.versionStatus',
};

export const versionStatus = {
  published: 'published',
  latest: 'latest',
};

export const entryFields = {
  entryTitle: 'entryTitle',
  entryDescription: 'entryDescription',
  entryThumbnail: 'entryThumbnail',
};

/**
 * Required for Sitemap generation
 * Expects a {boolean} field in Contensis
 * @see /src/app/server/features/sitemap/readme.md
 */
export const noIndexField = 'meta.noIndex';

export const baseFields = [
  entryFields.entryTitle,
  entryFields.entryDescription,
  entryFields.entryThumbnail,
  sys.id,
  sys.uri,
  sys.published,
  sys.contentTypeId,
];

export const siteConfigFields = ['entryTitle'];
