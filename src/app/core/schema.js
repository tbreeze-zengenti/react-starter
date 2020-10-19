export const DataFormats = {
  entry: 'entry',
  webpage: 'webpage',
};

const sys = {
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
  entryTitle: 'entryTitle',
  keywords: 'keywords',
  metaContent: 'metaContent',
  standfirst: 'standfirst',
  image: 'image',
  sys,
  contentTypeId: 'sys.contentTypeId',
  wildcard: '*',
  body: 'body',
};

export const BaseFields = [
  Fields.entryTitle,
  Fields.sys.contentTypeId,
  Fields.sys.slug,
  Fields.sys.uri,
  Fields.sys.published,
];

export const ArticleFields = [
  Fields.standfirst,
  Fields.image,
  Fields.category,
  Fields.academic,
  Fields.publishOverride,
  Fields.body,
  Fields.readingTime,
];

export const ArticleCardFields = [
  Fields.standfirst,
  Fields.image,
  Fields.category,
  Fields.academic,
  Fields.publishOverride,
];

export const Projects = {
  website: 'website',
};

export const VersionStatus = {
  published: 'published',
  latest: 'latest',
};

export const ContentTypes = {
  contentPage: 'contentPage',
  landingPage: 'landingPage',
  listingPage: 'listingPage',
  category: 'category',
  article: 'article',
  person: 'person',
};

export const WebpageFormats = {};

export const FilterExpressionTypes = {
  contentType: 'contentType',
  field: 'field',
};

export const CardTypes = {
  Event: 'Event',
  News: 'News',
  Profile: 'Profile',
  Webpage: 'Webpage',
};

export const Listings = {
  events: 'events',
  news: 'news',
  categoryArticles: 'categoryArticles',
};

export const ListingPages = {
  [ContentTypes.category]: Listings.categoryArticles,
};

export const SearchFacets = {
  all: 'all',
  products: 'products',
  help: 'helpandsupport',
  caseStudies: 'casestudies',
  partners: 'partners',
  news: 'news',
  pages: 'pages',
};

export const SearchFilters = {
  //Insert filters here
};

export const FreeTextWeights = {
  title: 100,
  description: 50,
  keywords: 50,
  content: 10,
};

export const RoutingFields = [
  Fields.sys.contentTypeId,
  Fields.sys.slug,
  Fields.sys.uri,
  Fields.entryTitle,
];

export const ComposerComponents = {
  //Insert composer components
};
