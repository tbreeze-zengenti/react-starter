import { SearchTransformations } from '@zengenti/contensis-react-base/search';

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

export const injectSearchAssets = async () => {
  const { routeParams, setRouteFilters } = (await import(
    /* webpackChunkName: "search-package" */
    '@zengenti/contensis-react-base/search'
  )) as typeof import('@zengenti/contensis-react-base/search');

  const mappers = (
    (await import(
      /* webpackChunkName: "search-mappers" */
      '~/features/search/transformations'
    )) as any
  ).default as SearchTransformations;

  return { routeParams, setRouteFilters, mappers };
};

export type InjectSearchAssets = {
  routeParams: any;
  setRouteFilters: typeof import('@zengenti/contensis-react-base/search')['setRouteFilters'];
  mappers: SearchTransformations;
};
