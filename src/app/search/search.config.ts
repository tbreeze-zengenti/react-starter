import type {
  SearchConfig,
  SearchFacet,
  Listing,
  WeightedSearchField,
} from '@zengenti/contensis-react-base/search';
import type { WhereClause } from '@zengenti/contensis-react-base/models/search/models/Search';

import { contentTypes } from '~/schema/contentTypes.schema';
import { baseFields } from '~/schema/fields.schema';
import {
  facets,
  listings,
  minilists,
  freeTextWeights,
} from '~/schema/search.schema';

const whereSysUri: WhereClause = {
  field: 'sys.uri',
  exists: true,
};

export const searchConfig = {
  tabs: [{ id: 0, label: '' }],
  facets: {
    [facets.all]: {
      title: 'Site Search',
      queryParams: {
        contentTypeIds: [],
        fields: [...baseFields],
        linkDepth: 0,
        pageSize: 9,
        weightedSearchFields: [
          { fieldId: 'entryTitle', weight: freeTextWeights.title },
          { fieldId: 'description', weight: freeTextWeights.description },
        ] as WeightedSearchField[],
        customWhere: [whereSysUri],
      },
    },
  } as { [key: string]: SearchFacet },
  listings: {
    [listings.all]: {
      title: 'Listing',
      queryParams: {
        contentTypeIds: [contentTypes.homePage, contentTypes.contentPage],
        fields: [...baseFields],
        pageSize: 9,
      },
    },
  } as { [key: string]: Listing },
  minilist: {
    [minilists.all]: {
      title: 'Minilist',
      queryParams: {
        contentTypeIds: [contentTypes.homePage, contentTypes.contentPage],
        fields: [...baseFields],
        pageSize: 3,
      },
    },
  } as { [key: string]: Listing },
} as SearchConfig;
