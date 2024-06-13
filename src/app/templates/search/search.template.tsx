import React from 'react';
import { useFacets } from '@zengenti/contensis-react-base/search';

import SearchPageStyled from '~/templates/search/search.styled';
import MainTemplate from '~/templates/main/main.template';

import useRelatedContentMinilist from '~/search/minilists/useRelatedContent.minilist';
import useMoviesMinilist from '~/search/minilists/useMovies.minilist';
import type { SearchResultProps } from '~/search/searchResults.mapper';

import SearchResult from '~/components/searchResult/searchResult.component';
import SearchInput from '~/components/searchInput/searchInput.component';

const Search = () => {
  /**
   * Bare minimum working site search example
   * Note: More SearchProps will be used in a complete example
   */
  const {
    results,
    updateSearchTerm,
    paging: { totalCount },
  } = useFacets<SearchResultProps>();

  /** Minilist example using an existing minilist config */
  const { results: minilistResults } = useRelatedContentMinilist();

  /**
   * Minilist example using a config that is created on the fly
   * and also is using a custom (non-Contensis) api to fetch its results
   */
  const { results: movieResults } = useMoviesMinilist();

  return (
    <MainTemplate>
      <SearchPageStyled>
        <div className="wrapper">
          <div className="bento-boxes">
            <section className="bento-box bento-box--wide">
              <h2 className="bento-box__title">Site search</h2>
              <SearchInput submit={updateSearchTerm} />
              <ul className="bento-box__results">
                {results.map(resultItem => {
                  return (
                    <li key={resultItem.id}>
                      <SearchResult {...resultItem} />
                    </li>
                  );
                })}
              </ul>
              <p className="bento-box__paging">
                Number of results {totalCount}
              </p>
            </section>

            <section className="bento-box">
              <h2 className="bento-box__title">Minilist search</h2>
              <ul className="bento-box__results">
                {minilistResults.map(resultItem => {
                  return (
                    <li key={resultItem.id}>
                      <SearchResult {...resultItem} />
                    </li>
                  );
                })}
              </ul>
            </section>

            <section className="bento-box">
              <h2 className="bento-box__title">Custom Api Minilist Search</h2>
              <ul className="bento-box__results">
                {movieResults.map(resultItem => {
                  return (
                    <li key={resultItem.id}>
                      <SearchResult {...resultItem} />
                    </li>
                  );
                })}
              </ul>
            </section>
          </div>
        </div>
      </SearchPageStyled>
    </MainTemplate>
  );
};

export default Search;
