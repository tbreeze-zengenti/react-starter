export const injectSearch = async () => {
  const { reducer: SearchReducer, sagas: SearchSagas } = await import(
    /* webpackChunkName: "search-package" */
    '@zengenti/contensis-react-base/search'
  );
  const { config } = await import(
    /* webpackChunkName: "search-config" */
    '~/features/search'
  );

  return {
    key: 'search',
    reducer: SearchReducer(config),
    saga: SearchSagas,
  };
};
