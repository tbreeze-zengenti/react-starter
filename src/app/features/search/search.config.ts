import {
  SearchConfig,
  SearchFacet,
  Listing,
  WeightedSearchField,
} from '@zengenti/contensis-react-base/search';

import { BaseFields, ContentTypes, FreeTextWeights } from '~/schema';

export default {
  tabs: [{ id: 0, label: '' }],
  facets: {
    all: {
      title: 'All results',
      queryParams: {
        contentTypeIds: [],
        fields: [...BaseFields],
        linkDepth: 0,
        pageSize: 9,
        weightedSearchFields: [
          { fieldId: 'entryTitle', weight: FreeTextWeights.title },
          { fieldId: 'description', weight: FreeTextWeights.description },
        ] as WeightedSearchField[],
      },
    },
  } as { [key: string]: SearchFacet },
  listings: {
    all: {
      title: 'Listing',
      queryParams: {
        contentTypeIds: [ContentTypes.homePage, 'article'],
        fields: [...BaseFields],
        pageSize: 9,
      },
    },
  } as { [key: string]: Listing },
  minilist: {
    all: {
      title: 'Minilist',
      queryParams: {
        contentTypeIds: [ContentTypes.homePage, 'article'],
        fields: [...BaseFields],
        pageSize: 3,
      },
    },
  } as { [key: string]: Listing },
} as SearchConfig;
