import { StaticRoute } from '@zengenti/contensis-react-base';

import { mapRouteEntryToProps } from '~/util/mapRouteEntryToProps';

import { NotFound, Welcome, ZenInfo } from '~/templates';

import { welcomeMapper } from '~/templates/welcome/welcome.mapper';

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
  // {
  //   path: '/search/:facet?',
  //   component: loadable<any>(
  //     () =>
  //       import(
  //         /* webpackChunkName: "search.template" */ '~/templates/search/search.template'
  //       )
  //   ),
  //   injectRedux: injectSearch,
  // },
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
