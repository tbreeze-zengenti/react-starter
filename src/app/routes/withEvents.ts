import { call } from 'redux-saga/effects';
import { RouteLoadOptions, WithEvents } from '@zengenti/contensis-react-base';
import { SearchTransformations } from '@zengenti/contensis-react-base/search';

import { ListingPages } from '~/schema';

export default {
  onRouteLoad: function* onRouteLoad() {
    // Set params for routing saga
    const routeLoadOptions: RouteLoadOptions = {
      customNavigation: {
        ancestors: false,
        children: false,
        siblings: false,
        tree: true,
      },
    };
    return yield routeLoadOptions;
  },
  onRouteLoaded: function* onRouteLoaded({
    path,
    entry,
    location,
    staticRoute,
  }) {
    const contentTypeId = entry?.sys?.contentTypeId;
    const listingType =
      staticRoute?.route?.listingType || ListingPages[contentTypeId];

    if (path.startsWith('/search') || listingType) {
      const { routeParams, setRouteFilters } = (yield import(
        /* webpackChunkName: "search-package" */
        '@zengenti/contensis-react-base/search'
      )) as typeof import('@zengenti/contensis-react-base/search');

      const transformations = (
        (yield import(
          /* webpackChunkName: "search-mappers" */
          '~/features/search/transformations'
        )) as any
      ).default as SearchTransformations;

      const params = routeParams(staticRoute, location);

      yield call(setRouteFilters, {
        listingType,
        mappers: transformations,
        params,
      });
    }
  },
} as WithEvents;
