import { StaticRoute } from '@zengenti/contensis-react-base';
import { CorePages, HomePage, SearchPage } from '~/dynamic/pages';

const staticRoutes: StaticRoute[] = [
  {
    path: '/',
    exact: true,
    fetchNode: true,
    component: HomePage,
  },
  {
    path: '/search/:facet?',
    exact: false,
    component: SearchPage,
    // Dynamically load search package and search config into redux
    injectRedux: async () => {
      const { reducer: SearchReducer, sagas: SearchSagas } = await import(
        /* webpackChunkName: "search-package" */
        '@zengenti/contensis-react-base/search'
      );
      const { config } = await import(
        /* webpackChunkName: "search-config" */
        '~/features/search'
      );

      return {
        key: 'search',
        reducer: SearchReducer(config),
        saga: SearchSagas,
      };
    },
  },
  // ********************************
  // ˅˅ Do not delete these routes ˅˅
  {
    path: '/404',
    component: CorePages[404],
  },
  {
    path: '/zenInfo',
    ssrOnly: true,
    component: CorePages.ZenInfo,
  },
  // ˄˄ Do not delete these routes ˄˄
  // ********************************
];

export default staticRoutes;
