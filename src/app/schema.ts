export const DataFormats = {
  entry: 'entry',
  webpage: 'webpage',
};

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

export const Fields = {
  entryTitle: 'entryTitle',
  entryDescription: 'entryDescription',
  entryThumbnail: 'entryThumbnail',
  contentTypeId: 'sys.contentTypeId',
  sys,
};

export const BaseFields = [
  Fields.entryTitle,
  Fields.entryDescription,
  Fields.entryThumbnail,
  Fields.sys.contentTypeId,
  Fields.sys.id,
  Fields.sys.uri,
  Fields.sys.published,
];

export const VersionStatus = {
  published: 'published',
  latest: 'latest',
};

export const ContentTypes = {
  homePage: 'homePage',
  listingPage: 'listingPage',
  config: 'siteSettings',
};

export const SiteConfig = [];

export const ComposerComponents = {
  markup: 'richText',
};

export const Listings = {
  all: 'all',
};

export const Minilists = {
  all: 'all',
};

export const ListingPages = {
  [ContentTypes.listingPage]: Listings.all,
};

export const SearchFacets = {
  all: 'all',
};

export const SearchFilters = {};

export const FreeTextWeights = {
  title: 100,
  description: 50,
};
