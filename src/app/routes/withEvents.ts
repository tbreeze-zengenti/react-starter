import { call, select } from 'redux-saga/effects';
import { RouteLoadOptions, WithEvents } from '@zengenti/contensis-react-base';

import {
  InjectSearchAssets,
  injectSearchAssets,
} from '~/util/injectSearchAssets';

import { ListingPages } from '~/schema/schema';

// import { hasSiteConfig } from '~/redux/siteConfig/selectors';
// import { ensureSiteConfigSaga } from '~/redux/siteConfig/sagas';

export default {
  onRouteLoad: function* onRouteLoad() {
    // const siteConfigExists = yield select(hasSiteConfig);
    // if (!siteConfigExists) yield call(ensureSiteConfigSaga);

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
