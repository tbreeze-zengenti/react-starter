import { call } from 'redux-saga/effects';
import { RouteLoadOptions, WithEvents } from '@zengenti/contensis-react-base';
import { injectSearchAssets, InjectSearchAssets } from '~/redux/dynamic';

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
      const { routeParams, setRouteFilters, mappers } =
        (yield injectSearchAssets()) as InjectSearchAssets;

      const params = routeParams(staticRoute, location);

      yield call(setRouteFilters, {
        listingType,
        mappers,
        params,
      });
    }
  },
} as WithEvents;
