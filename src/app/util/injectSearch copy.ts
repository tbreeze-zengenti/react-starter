export const injectSearch = async () => {
  const { reducer: SearchReducer, sagas: SearchSagas } = await import(
    /* webpackChunkName: "search-package" */
    '@zengenti/contensis-react-base/search'
  );

  const { listingsConfig } = await import(
    /* webpackChunkName: "bury.listings-config" */
    '~/search/listings.config'
  );

  return {
    key: 'search',
    reducer: SearchReducer(listingsConfig.searchConfig),
    saga: SearchSagas,
  };
};
