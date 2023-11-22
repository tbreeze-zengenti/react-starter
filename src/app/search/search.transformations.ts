import { SearchTransformations } from '@zengenti/contensis-react-base/models/search';

import searchResultsMapper from './searchResults.mapper';
import searchResultsInformationMapper from './searchResultsInformation.mapper';

export default {
  results: searchResultsMapper,
  resultsInfo: searchResultsInformationMapper,
} as SearchTransformations;
