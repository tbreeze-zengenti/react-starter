export const DataFormats = {
  entry: 'entry',
  webpage: 'webpage',
};

export const sys = {
  contentTypeId: 'sys.contentTypeId',
  dataFormat: 'sys.dataFormat',
  filename: 'sys.properties.filename',
  id: 'sys.id',
  includeInSearch: 'sys.metadata.includeInSearch',
  slug: 'sys.slug',
  uri: 'sys.uri',
  versionStatus: 'sys.versionStatus',
  published: 'sys.version.published',
};

export const Fields = {
  categoryId: 'category.sys.id',
  contentTypeId: 'sys.contentTypeId',
  entryTitle: 'entryTitle',
  entryDescription: 'entryDescription',
  image: 'image',
  keywords: 'keywords',
  metaContent: 'metaContent',
  publishedDate: 'publishedDate',
  sys,
  wildcard: '*',
};

export const BaseFields = [
  Fields.entryTitle,
  Fields.entryDescription,
  Fields.sys.contentTypeId,
  Fields.sys.slug,
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

export const Config = [
  'logo',
  'facebookLink',
  'linkedinLink',
  'twitterLink',
  'copyrightName',
];

export const ComposerComponents = {
  // Insert composer components
  markup: 'textArea',
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

export const SearchFilters = {
  category: 'category',
};

export const FreeTextWeights = {
  title: 100,
  description: 50,
};
