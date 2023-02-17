import React, { useEffect, useState } from 'react';
import { v4 as id } from 'uuid';

import {
  useFacets,
  useMinilist,
  UseMinilistProps,
} from '@zengenti/contensis-react-base/search';

import mappers from '~/components/search/transformations';
import omdbapiToCardpropsMapper from '~/components/search/transformations/omdbapi-to-cardprops.mapper';

import ResultCard from '~/components/search/components/resultCard';
import { ResultCardProps } from '~/components/search/components/resultCard.types';

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
            uri: 'http://www.omdbapi.com/?apikey=b194ff96',
          },
        },
        mappers: {
          customApi: () => ({
            s: 'dawn of the dead',
          }),
          results: omdbapiToCardpropsMapper,
        },
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
          <ResultCard key={id()} {...content} />
        ))}
      </div>
      <h2>{relatedTitle}</h2>
      <div>
        {related.map(content => (
          <ResultCard key={id()} {...content} />
        ))}
      </div>
      <h2>{minlistTitle}</h2>
      <div>
        {movies.map(movie => (
          <ResultCard key={id()} {...movie} />
        ))}
      </div>
    </div>
  );
};

export default SearchPage;
