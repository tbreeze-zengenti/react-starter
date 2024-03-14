import { SearchTransformations } from '@zengenti/contensis-react-base/search';

export const injectSearchAssets = async () => {
  const { routeParams, setRouteFilters } = (await import(
    /* webpackChunkName: "search-package" */
    '@zengenti/contensis-react-base/search'
  )) as typeof import('@zengenti/contensis-react-base/search');

  const mappers = (
    (await import(
      /* webpackChunkName: "search-mappers" */
      '~/search/search.mapper'
    )) as any
  ).default as SearchTransformations;

  return { routeParams, setRouteFilters, mappers };
};

export type InjectSearchAssets = {
  routeParams: any;
  setRouteFilters: typeof import('@zengenti/contensis-react-base/search')['setRouteFilters'];
  mappers: SearchTransformations;
};
