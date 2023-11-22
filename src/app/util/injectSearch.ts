export const injectSearch = async () => {
  const { reducer: SearchReducer, sagas: SearchSagas } = await import(
    /* webpackChunkName: "search-package" */
    '@zengenti/contensis-react-base/search'
  );

  const { searchConfig } = await import(
    /* webpackChunkName: "search.config" */
    '~/search/search.config'
  );

  return {
    key: 'search',
    reducer: SearchReducer(searchConfig),
    saga: SearchSagas,
  };
};
