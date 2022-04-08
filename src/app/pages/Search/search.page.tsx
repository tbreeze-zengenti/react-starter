import React, { useEffect, useState } from 'react';

import {
  useFacets,
  useMinilist,
  UseMinilistProps,
} from '@zengenti/contensis-react-base/search';

import mappers from '~/features/search/transformations';
import omdbapiToCardpropsMapper from '~/features/search/transformations/omdbapi-to-cardprops.mapper';

import ResultCard from '~/features/search/components/resultCard';
import { ResultCardProps } from '~/features/search/components/resultCard.types';

// import { uniqueID } from '-/../ps-components/src/utilities/uniqueID';
function uniqueID() {
  return '_' + Math.random().toString(36).substr(2, 9) + '_';
}

const minilistInitState = {
  id: '',
  mapper: (e: any = []) => e,
} as UseMinilistProps;

const SearchPage = () => {
  const [relatedContentMinilist, setRelatedContentConfig] =
    useState(minilistInitState);

  const [movieMinilist, setMovieConfig] = useState(minilistInitState);

  useEffect(() => {
    // Using a setTimeout to allow the async search bundles to
    // fully register before triggering a minilist in a static route
    setTimeout(() => {
      setRelatedContentConfig({
        id: 'all',
        mapper: mappers.results,
      });

      setMovieConfig({
        id: 'movies',
        config: {
          title: 'Custom Api',
          customApi: {
            uri: 'http://www.omdbapi.com/?apikey=b194ff96&s=dawn+of+the+dead',
          },
        },
        mapper: omdbapiToCardpropsMapper,
      });
    }, 500);
  }, []);

  // Minilist example using an existing minilist config
  const { results: related, title: relatedTitle } =
    useMinilist<ResultCardProps>(relatedContentMinilist);

  // Minilist example using a config that is created on the fly
  // and also is using a custom (non-Contensis) api to fetch its results
  const { results: movies, title: minlistTitle } =
    useMinilist<ResultCardProps>(movieMinilist);

  // Bare minimum working search example
  // More SearchProps will be used in a complete example
  const { results } = useFacets<ResultCardProps>({ mappers });

  return (
    <div>
      <h1>Search</h1>
      <div>
        {results.map(content => (
          <ResultCard key={uniqueID()} {...content} />
        ))}
      </div>
      <h2>{relatedTitle}</h2>
      <div>
        {related.map(content => (
          <ResultCard key={uniqueID()} {...content} />
        ))}
      </div>
      <h2>{minlistTitle}</h2>
      <div>
        {movies.map(movie => (
          <ResultCard key={uniqueID()} {...movie} />
        ))}
      </div>
    </div>
  );
};

export default SearchPage;
