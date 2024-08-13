import { all, call } from 'redux-saga/effects';
import { getSiteConfigSaga } from '~/redux/siteConfig/sagas';

import type {
  RouteLoadOptions,
  WithEvents,
} from '@zengenti/contensis-react-base';

import { loadSearchConfig } from '~/util/loadSearchConfig';

export default {
  onRouteLoad: function* onRouteLoad({ ssr }) {
    const routeLoadOptions: RouteLoadOptions = {
      customNavigation: {
        ancestors: false,
        children: false,
        siblings: false,
        tree: true,
      },
    };
    return yield all([call(getSiteConfigSaga, ssr), routeLoadOptions]);
  },
  onRouteLoaded: function* onRouteLoaded({
    path,
    entry,
    location,
    staticRoute,
    routes,
  }) {
    yield loadSearchConfig(path, entry, location, staticRoute, routes);
  },
} as WithEvents;
