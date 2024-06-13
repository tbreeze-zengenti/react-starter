import { call } from 'redux-saga/effects';
import {
  InjectSearchAssets,
  injectSearchAssets,
} from '~/util/injectSearchAssets';
import { listingPages } from '~/schema/search.schema';
import type {
  RouteLoadOptions,
  WithEvents,
} from '@zengenti/contensis-react-base';
import { getSiteConfigSaga } from '~/redux/siteConfig/sagas';

export default {
  onRouteLoad: function* onRouteLoad({ ssr }) {
    yield call(getSiteConfigSaga, ssr);

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
  },
} as WithEvents;
