import React, { useEffect, useState } from 'react';

import {
  useMinilist,
  UseMinilistProps,
} from '@zengenti/contensis-react-base/search';

import mapEntriesToResults from '~/features/search/transformations/entry-to-cardprops.mapper';
import omdbapiToCardpropsMapper from '~/features/search/transformations/omdbapi-to-cardprops.mapper';
import ResultCard from '~/features/search/components/ResultCard';

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
  const { results: movies, title: minlistTitle } = useMinilist(movieMinilist);

  useEffect(() => {
    // Using a setTimeout to allow the async search bundles to
    // fully register before triggering a minilist in a static route
    setTimeout(() => {
      setRelatedContentConfig({
        id: 'relatedContent',
        mapper: mapEntriesToResults,
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

  const { results: related, title: relatedTitle } = useMinilist(
    relatedContentMinilist
  );

  return (
    <div>
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
