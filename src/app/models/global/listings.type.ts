import {
  Listing,
  SearchConfig as ZenSearchConfig,
  SearchTransformations,
} from '@zengenti/contensis-react-base/search';

export type ListingsConfiguration = {
  listings: Record<string, Omit<ListingConfig, 'isSearchFacet' | 'config'>>;
  search: {
    mapper: ListingConfig['mapper'];
  };
  searchConfig: ZenSearchConfig;
};

export type ListingConfig = {
  /** key to assign to search state */
  key: string;
  /** Contensis content type ID of the template */
  contentTypeId: string;
  /** Render this listing as a facet on the search also */
  isSearchFacet?: boolean;
  /** search transformations */
  mapper: SearchTransformations;
  /** search listing config */
  config: Listing;
};

export type SearchConfig = {
  /** search transformations */
  mapper: SearchTransformations;
  /** search listing config */
  config: Partial<ZenSearchConfig>;
};
