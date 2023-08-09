import React, { useEffect, useState } from 'react';
import {
  useFacets,
  useMinilist,
  UseMinilistProps,
} from '@zengenti/contensis-react-base/search';

import mappers from '~/search/transformations';
import omdbapiToCardpropsMapper from '~/search/transformations/omdbapi-to-cardprops.mapper';

import SearchResult from '~/components/searchResult/searchResult';
import { SearchResultProps } from '~/components/searchResult/searchResult.types';
import SearchInput from '~/components/searchInput/searchInput.component';

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

  // Bare minimum working site search example
  // Note: More SearchProps will be used in a complete example
  const {
    results,
    facet: { title },
    updateSearchTerm,
    searchTerm,
  } = useFacets<SearchResultProps>({ mappers });

  // Minilist example using an existing minilist config
  const { results: related, title: relatedTitle } =
    useMinilist<SearchResultProps>(relatedContentMinilist);

  // Minilist example using a config that is created on the fly
  // and also is using a custom (non-Contensis) api to fetch its results
  const { results: movies, title: minlistTitle } =
    useMinilist<SearchResultProps>(movieMinilist);

  return (
    <div>
      <h1>Search page</h1>
      {/* Site Search */}
      <SearchComponent
        title={title}
        results={results}
        input={
          <SearchInput
            searchTerm={searchTerm}
            updateSearchTerm={updateSearchTerm}
          />
        }
      />
      <br />
      {/* Minilist Search */}
      <SearchComponent title={relatedTitle} results={related} />
      <br />
      {/* Custom Api Search */}
      <SearchComponent title={minlistTitle} results={movies} />
    </div>
  );
};

type SearchComponentProps = {
  title: string;
  results: SearchResultProps[];
  input?: React.ReactNode;
};
const SearchComponent = ({ title, results, input }: SearchComponentProps) => {
  return (
    <div>
      <h2>{title}</h2>
      {input}
      <div>
        {results.map(content => (
          <SearchResult key={content.id} {...content} />
        ))}
      </div>
    </div>
  );
};

export default SearchPage;
