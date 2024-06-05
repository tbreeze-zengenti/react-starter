import { useEffect, useState } from 'react';
import { useMinilist } from '@zengenti/contensis-react-base/search';
import { useSelector } from 'react-redux';
import { selectSearchExists } from '~/redux/selectors';
import { minilists } from '~/schema/search.schema';
import searchTransformations from '~/search/search.transformations';
import type { UseMinilistProps } from '@zengenti/contensis-react-base/search';
import { SearchResultProps } from '~/search/searchResults.mapper';

const minilistInitState = {
  id: '', // identifier for search.config minilist
  mapper: searchTransformations.results,
} as UseMinilistProps;

// Minilist example using an existing minilist config
export default () => {
  const isSearchSetup = useSelector(selectSearchExists);
  const [minilistOptions, setMinilistOptions] = useState(minilistInitState);

  useEffect(() => {
    if (!isSearchSetup) return; // Since we are dynamically injecting search redux, we need to wait until it loads

    setMinilistOptions({
      id: minilists.all,
      mappers: searchTransformations,
    });
  }, [isSearchSetup]);

  return useMinilist<SearchResultProps>(minilistOptions);
};
