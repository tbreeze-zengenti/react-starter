import { call } from 'redux-saga/effects';
import { getSiteConfigSaga } from '~/redux/siteConfig/sagas';

import type {
  RouteLoadOptions,
  WithEvents,
} from '@zengenti/contensis-react-base';

import { loadSearchConfig } from '~/util/loadSearchConfig';

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
  onRouteLoaded: function* onRouteLoaded(onRouteLoadedArgs) {
    yield loadSearchConfig(onRouteLoadedArgs);
  },
} as WithEvents;
