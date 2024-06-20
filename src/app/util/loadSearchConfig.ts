import { Entry } from 'contensis-delivery-api';
import { call } from 'redux-saga/effects';
import type { GetRouteActionArgs } from '@zengenti/contensis-react-base';
import { SearchTransformations } from '@zengenti/contensis-react-base/search';

import { listingPages } from '~/schema/search.schema';

/**
 * @description Asynchronously load and inject assets related to Search
 */
const injectSearchAssets = async () => {
  const { routeParams, setRouteFilters } = (await import(
    /* webpackChunkName: "search-package" */
    '@zengenti/contensis-react-base/search'
  )) as typeof import('@zengenti/contensis-react-base/search');

  const mappers = (
    (await import(
      /* webpackChunkName: "search.transformations" */
      '~/search/search.transformations'
    )) as any
  ).default as SearchTransformations;

  return { routeParams, setRouteFilters, mappers };
};

type InjectSearchAssets = {
  routeParams: any;
  setRouteFilters: typeof import('@zengenti/contensis-react-base/search')['setRouteFilters'];
  mappers: SearchTransformations;
};

/**
 * Dynamically sets the Search config based on the following:
 * - Static Routes: `listingType` param
 * - ContentType Routes: `listingPages` schema
 * @see /routes/withEvents.ts
 */
export function* loadSearchConfig(
  path: GetRouteActionArgs['path'],
  entry: Entry,
  location: GetRouteActionArgs['location'],
  staticRoute: GetRouteActionArgs['staticRoute']
) {
  const contentTypeId = entry?.sys?.contentTypeId;
  const listingType =
    staticRoute?.route?.listingType || listingPages[contentTypeId];

  if (path.startsWith('/search') || listingType) {
    const { routeParams, setRouteFilters, mappers } =
      (yield injectSearchAssets()) as InjectSearchAssets;

    const params = routeParams(staticRoute, location);

    yield call(setRouteFilters, {
      listingType,
      mappers,
      params,
    });
  }
}
