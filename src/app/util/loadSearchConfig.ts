import { Entry } from 'contensis-delivery-api';
import { call } from 'redux-saga/effects';
import type { GetRouteActionArgs } from '@zengenti/contensis-react-base';
import { SearchTransformations } from '@zengenti/contensis-react-base/search';

import {
  StaticRoute as Route,
  ContentTypeMapping,
} from '@zengenti/contensis-react-base';

export interface StaticRoute extends Route {
  /**
   * @description Triggers the loading of the relevant search config listing object to state
   */
  listingType?: string;
}

export interface ContentTypeRoute extends ContentTypeMapping {
  /**
   * @description Triggers the loading of the relevant search config listing object to state
   */
  listingType?: string;
}

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
  setRouteFilters: (typeof import('@zengenti/contensis-react-base/search'))['setRouteFilters'];
  mappers: SearchTransformations;
};

/**
 * Automatically loads the Search config if:
 * - `path` matches `/search`
 * - a `listingType` is present
 *
 * @requires `injectRedux: injectSearch` to be applied on a given route
 * @see /routes/withEvents.ts
 */
export function* loadSearchConfig(
  path: GetRouteActionArgs['path'],
  entry: Entry,
  location: GetRouteActionArgs['location'],
  staticRoute: GetRouteActionArgs['staticRoute'],
  routes: GetRouteActionArgs['routes']
) {
  const contentTypeId = entry?.sys?.contentTypeId;
  const contentTypeRoutes: ContentTypeRoute[] = routes?.ContentTypeMappings;

  const contentTypeListings: Record<string, string> = contentTypeRoutes.reduce(
    (obj, item) =>
      Object.assign(obj, { [item.contentTypeID]: item.listingType }),
    {}
  );

  const listingType =
    staticRoute?.route?.listingType || contentTypeListings[contentTypeId];

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
