import { StaticRoute } from '@zengenti/contensis-react-base';

import { mapRouteEntryToProps } from '~/util/mapRouteEntryToProps';

import { NotFound, Search, Welcome, ZenInfo } from '~/templates';

import { welcomeMapper } from '~/templates/welcome/welcome.mapper';
import { injectSearch } from '~/util/injectSearch';

/**
 * An array of static routes used in the application.
 */
const staticRoutes: StaticRoute[] = [
  {
    path: '/',
    exact: true,
    component: Welcome,
    fetchNode: {
      params: [],
      entryMapper: mapRouteEntryToProps(welcomeMapper),
    },
  },
  {
    path: '/search/:facet?',
    component: Search,
    injectRedux: injectSearch,
    fetchNode: false,
  },
  {
    path: '/404',
    component: NotFound,
  },
  {
    path: '/zenInfo',
    ssrOnly: true,
    component: ZenInfo,
  },
];

export default staticRoutes;
