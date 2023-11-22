import { StaticRoute } from '@zengenti/contensis-react-base';
import loadable from '@loadable/component';

import { injectSearch } from '~/util/injectSearch';

const staticRoutes: StaticRoute[] = [
  // {
  //   path: '/search/:facet?',
  //   component: loadable<any>(
  //     () =>
  //       import(
  //         /* webpackChunkName: "search.template" */ '~/templates/search/search.template'
  //       )
  //   ),
  // injectRedux: injectSearch,
  // },
  // ********************************
  // ˅˅ Do not delete these routes ˅˅
  {
    path: '/404',
    component: loadable(
      () =>
        import(
          /* webpackChunkName: "notFound.template" */ '~/templates/notFound/notFound.template'
        )
    ),
  },
  {
    path: '/zenInfo',
    ssrOnly: true,
    component: loadable(
      () =>
        import(
          /* webpackChunkName: "zeninfo.template" */ '@zengenti/contensis-react-base/util'
        ),
      { resolveComponent: module => module.VersionInfo }
    ),
  },
];

export default staticRoutes;
