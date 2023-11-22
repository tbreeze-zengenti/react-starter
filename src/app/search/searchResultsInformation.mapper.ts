import { AppState } from '@zengenti/contensis-react-base/models/search/models/SearchState';
import { selectors } from '@zengenti/contensis-react-base/search';
import { mapJson } from '@zengenti/contensis-react-base/util';

const { getCurrent, getListing, getResults, getTotalCount, getPaging } =
  selectors.selectListing;

const listingTitle = (state: AppState) => {
  const listing = getListing(state);
  return listing?.title;
};

const totalCount = (state: AppState) => getTotalCount(state);

const searchSummaryTemplate = {
  currentListing: (state: AppState) => getCurrent(state),
  currentPageCount: (state: AppState) => getResults(state).length,
  listingTitle,
  noResultsText: (state: AppState) =>
    totalCount(state) === 0 ? `No results were found` : '',
  resultsText: (state: AppState) => {
    const paging = getPaging(state);
    const { pageIndex, pageSize, totalCount, pagesLoaded } = paging;
    if (!pagesLoaded) return null;
    const start = (pagesLoaded[0] || pageIndex) * pageSize + 1;
    let end = start + (pagesLoaded.length * pageSize || pageSize) - 1;
    if (end > totalCount) end = totalCount;

    return `${start} - ${end} of ${totalCount} results`;
  },
};

const searchResultsInformationMapper = (state: AppState) =>
  mapJson(state, searchSummaryTemplate);

export default searchResultsInformationMapper;
