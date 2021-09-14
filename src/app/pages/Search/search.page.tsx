import React from 'react';
import { Reducer } from 'redux';
import { useInjectSaga, useInjectReducer } from 'redux-injectors';
import { all } from 'redux-saga/effects';
import {
  reducer,
  sagas,
  useMinilist,
} from '@zengenti/contensis-react-base/search';
import uniqueID from '~/core/util/unique';
import SearchContainer, { config } from '~/features/search';
import mapEntriesToResults from '~/features/search/transformations/entry-to-cardprops.mapper';
import omdbapiToCardpropsMapper from '~/features/search/transformations/omdbapi-to-cardprops.mapper';
import ResultCard from '~/features/search/components/ResultCard';

function* rootSaga() {
  yield all(sagas);
}

const SearchPage = () => {
  useInjectReducer({
    key: 'search',
    reducer: reducer(config) as Reducer<any, any>,
  });
  useInjectSaga({ key: 'search', saga: rootSaga });

  const { results: movies, title: minlistTitle } = useMinilist({
    id: 'movies',
    config: {
      title: 'Custom Api',
      customApi: {
        uri: 'http://www.omdbapi.com/?apikey=b194ff96&s=dawn+of+the+dead',
      },
    },
    mapper: omdbapiToCardpropsMapper,
  });

  const { results: related, title: relatedTitle } = useMinilist({
    id: 'relatedContent',
    mapper: mapEntriesToResults,
  });

  return (
    <div>
      <SearchContainer />
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
