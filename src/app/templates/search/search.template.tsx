import React from 'react';
import { Helmet } from 'react-helmet';
import { useFacets } from '@zengenti/contensis-react-base/search';

import SearchPageStyled from '~/templates/search/search.styled';
import MainTemplate from '~/templates/main/main.template';

import useRelatedContentMinilist from '~/search/minilists/useRelatedContent.minilist';
import useMoviesMinilist from '~/search/minilists/useMovies.minilist';
import type { SearchResultProps } from '~/search/searchResults.mapper';

import SearchResult from '~/components/searchResult/searchResult.component';
import SearchInput from '~/components/searchInput/searchInput.component';
import Link from '~/components/link/link.component';

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
    <>
      <Helmet>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter&display=swap"
          rel="stylesheet"
        ></link>
      </Helmet>
      <MainTemplate meta={{ pageTitle: 'Search example' }}>
        <SearchPageStyled>
          <div className="wrapper">
            <div className="logo">
              <Link path="/">
                <h1 className="sr-only">React Starter</h1>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 58 65"
                  className="logo__icon"
                  focusable="false"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M57.9734 20.2287c-.1997-1.476-.7214-2.89-1.5283-4.1422-.8069-1.2521-1.8793-2.3116-3.1412-3.1036l-2.7397-1.5892-1.3899-.7995-11.1986-6.4563-4.2495-2.45858C32.2719.90499 30.6495.5 29.0017.5c-1.6477 0-3.2701.40499-4.7244 1.17932L7.4692 11.4037l-2.73967 1.5792c-1.26191.792-2.33422 1.8515-3.14112 3.1036C.781509 17.3387.259687 18.7527.0600233 20.2287c-.0415967.3315-.06157298.6653-.05992961.9994v22.5971C.0498876 45.4754.507898 47.0875 1.33319 48.5176c.8253 1.4301 1.99215 2.6336 3.39634 3.5029l7.37917 4.2675 4.8394 2.7984 7.3292 4.2276c1.4529.7786 3.0759 1.186 4.7244 1.186 1.6486 0 3.2716-.4074 4.7245-1.186L53.274 52.0205c1.4023-.8705 2.5672-2.0745 3.3907-3.5045.8235-1.43 1.28-3.0416 1.3287-4.6908V21.1881c.0133-.3199.0066-.6403-.02-.9594Zm-33.1162 34.74-1.9998-1.1393-9.189-5.3169-5.19931-2.9983c-.53117-.4326-.88661-1.0437-.99989-1.7191V29.1536c.00563-.0064.0125-.0115.02026-.015.00776-.0035.01627-.0053.02478-.0053s.0169.0018.02465.0053c.00776.0035.01464.0086.02027.015l4.54954 2.6384 4.8394 2.7885 7.3292 4.2475c.2976.1678.6047.318.9198.4498.0196.0089.0364.0228.0487.0404.0123.0175.0197.0381.0214.0595v15.3912c-.0076.0472-.0268.0918-.0558.1298-.029.038-.067.0683-.1106.0881-.0435.0198-.0912.0285-.139.0254-.0477-.0032-.094-.0181-.1346-.0435h.03Zm4.1696-22.4871c-.3424.0133-.6836-.048-.9999-.1799l-5.1494-2.9982-9.189-5.317-5.1994-2.9983c-.17322-.1173-.32259-.2666-.44001-.4397-.07305-.0983-.11241-.2174-.11241-.3398 0-.1224.03936-.2416.11241-.3398.12027-.168.26926-.3135.44001-.4298L27.9768 8.15561c.6446-.24237 1.3553-.24237 1.9998 0l2.0797 1.20927 15.4982 8.99482 1.9998 1.1394c.1708.1163.3197.2618.44.4297.0688.1.1056.2185.1056.3399 0 .1213-.0368.2398-.1056.3397-.1174.1732-.2668.3224-.44.4398L29.9766 32.3017c-.3168.1301-.6576.1914-.9999.1799h.0501Zm21.5374 11.3035c-.1133.6754-.4687 1.2865-.9999 1.7191l-16.3681 9.4645c-.0441.0267-.0946.0411-.1461.0418-.0515.0007-.1023-.0124-.1471-.0378-.0448-.0255-.0821-.0624-.1079-.107-.0258-.0446-.0391-.0953-.0388-.1468V39.3377c-.0002-.0231.0063-.0458.0187-.0653.0124-.0195.0302-.035.0513-.0446.3193-.1298.63-.28.9299-.4497l16.718-9.6745c.0057-.0064.0125-.0115.0203-.015.0078-.0035.0163-.0053.0248-.0053s.0169.0018.0246.0053c.0078.0035.0147.0086.0203.015v14.6815Z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
            </div>
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
    </>
  );
};

export default Search;
