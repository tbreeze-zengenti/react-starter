import { StaticRoute } from '@zengenti/contensis-react-base';

import { CorePages, FormSelector, Home, Search } from '~/dynamic/pages';
import LoginPage from '~/pages/Login/Login.page';
import { injectSearch } from '~/redux/dynamic';

const staticRoutes: StaticRoute[] = [
  {
    path: '/',
    exact: true,
    fetchNode: true,
    component: Home,
  },
  {
    path: '/account/login',
    exact: true,
    component: LoginPage,
  },
  {
    path: '/form/:formId?',
    component: FormSelector,
  },
  {
    path: '/search/:facet?',
    component: Search,
    injectRedux: injectSearch,
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
