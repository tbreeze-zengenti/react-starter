import { SearchState, selectors } from '@zengenti/contensis-react-base/search';
import { mapJson } from '@zengenti/contensis-react-base/util';

const { getCurrent, getListing, getResults, getTotalCount, getPaging } =
  selectors.selectListing;

type ReduxWithSearch = { search: SearchState };

/**
 * Retrieves the title of the current listing from the application state.
 */
const listingTitle = (state: ReduxWithSearch): string | undefined => {
  const listing = getListing(state);
  return listing?.title;
};

/**
 * Retrieves the total count of search results from the application state.
 */
const totalCount = (state: ReduxWithSearch): number => getTotalCount(state);

/**
 * Template object for generating search summary information.
 */
const searchSummaryTemplate = {
  currentListing: (state: ReduxWithSearch): string => getCurrent(state),
  currentPageCount: (state: ReduxWithSearch): number =>
    getResults(state).length,
  listingTitle,
  noResultsText: (state: ReduxWithSearch): string =>
    totalCount(state) === 0 ? `No results were found` : '',
  resultsText: (state: ReduxWithSearch) => {
    const paging = getPaging(state);
    const { pageIndex, pageSize, totalCount, pagesLoaded } = paging;
    if (!pagesLoaded) return null;
    const start = (pagesLoaded[0] || pageIndex) * pageSize + 1;
    let end = start + (pagesLoaded.length * pageSize || pageSize) - 1;
    if (end > totalCount) end = totalCount;

    return `${start} - ${end} of ${totalCount} results`;
  },
};

const searchResultsInformationMapper = (state: ReduxWithSearch) =>
  mapJson(state, searchSummaryTemplate);

export default searchResultsInformationMapper;
