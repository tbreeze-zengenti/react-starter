import {
  SearchConfig,
  SearchFacet,
  Listing,
  WeightedSearchField,
} from '@zengenti/contensis-react-base/search';
import { contentTypes } from '~/schema/contentTypes.schema';
import { baseFields } from '~/schema/fields.schema';
import { freeTextWeights } from '~/schema/search.schema';

const whereSysUri = {
  field: 'sys.uri',
  exists: true,
};

export const searchConfig = {
  tabs: [{ id: 0, label: '' }],
  facets: {
    all: {
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
    all: {
      title: 'Listing',
      queryParams: {
        contentTypeIds: [contentTypes.homePage, contentTypes.contentPage],
        fields: [...baseFields],
        pageSize: 9,
      },
    },
  } as { [key: string]: Listing },
  minilist: {
    all: {
      title: 'Minilist',
      queryParams: {
        contentTypeIds: [contentTypes.homePage, contentTypes.contentPage],
        fields: [...baseFields],
        pageSize: 3,
      },
    },
  } as { [key: string]: Listing },
} as SearchConfig;
