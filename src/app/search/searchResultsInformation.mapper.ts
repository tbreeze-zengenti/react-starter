import {
  selectors,
  type SearchState,
} from '@zengenti/contensis-react-base/search';

const { getPaging, getTotalCount, getIsLoaded } = selectors.selectFacets;

type ReduxWithSearch = { search: SearchState };

const noResultsTextMapper = (state: ReduxWithSearch): string | undefined => {
  const context = selectors.getSearchContext(state);
  const isLoaded = getIsLoaded(state, context);
  const totalCount = getTotalCount(state, undefined, context);

  return isLoaded && totalCount === 0 ? `No results were found` : undefined;
};

const resultsTextMapper = (state: ReduxWithSearch): string | undefined => {
  const context = selectors.getSearchContext(state);
  const paging = getPaging(state, undefined, context);

  const { pageIndex, pageSize, totalCount, pagesLoaded } = paging;
  if (!pagesLoaded) return undefined;
  const start = (pagesLoaded[0] || pageIndex) * pageSize + 1;
  let end = start + (pagesLoaded.length * pageSize || pageSize) - 1;
  if (end > totalCount) end = totalCount;

  return `${start} - ${end} of ${totalCount} results`;
};

/**
 * generate search summary information.
 * @description you can add additional information for example: pagination details
 */
const searchResultsInformationMapper = (state: ReduxWithSearch) => {
  return {
    noResultsText: noResultsTextMapper(state),
    resultsText: resultsTextMapper(state),
  };
};

export default searchResultsInformationMapper;
