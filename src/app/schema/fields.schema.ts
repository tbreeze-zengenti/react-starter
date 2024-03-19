export const sys = {
  availableLanguages: 'sys.availableLanguages',
  contentTypeId: 'sys.contentTypeId',
  dataFormat: 'sys.dataFormat',
  id: 'sys.id',
  language: 'sys.language',
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
