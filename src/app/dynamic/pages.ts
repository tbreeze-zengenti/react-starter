import Loadable from './loadable';

// Props Models
import { UnmappedProps as HomePageProps } from '~/pages/Home/home.d';

export const HomePage = Loadable<HomePageProps>(
  () => import(/* webpackChunkName: "home.page" */ '~/pages/Home/home.page')
);
export const SearchPage = Loadable(
  () =>
    import(/* webpackChunkName: "search.page" */ '~/pages/Search/search.page')
);
// ********************************
// ˅˅ Do not delete these pages ˅˅
export const CorePages = {
  404: Loadable(
    () => import(/* webpackChunkName: "notfound" */ '~/pages/NotFound')
  ),
  ZenInfo: Loadable(
    () =>
      import(/* webpackChunkName: "versioninfo.page" */ '~/pages/VersionInfo')
  ),
};
// ˄˄ Do not delete these pages ˄˄
// ********************************
