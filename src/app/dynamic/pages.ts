import loadable from '@loadable/component';
// Use RouteComponentProps when you aren't using prop typings
// Also when writing types for page components, wrap your mapped props
// typing inside RouteComponentProps to apply them to
// the 'mappedEntry' prop received in your page component
// e.g. type MappedEntry = { title: string; prop2: string; };
// export type HomePageProps = RouteComponentProps<MappedEntry>;
import { RouteComponentProps } from '@zengenti/contensis-react-base';

import { HomeProps } from '~/pages/Home/home.type';

export const Home = loadable<HomeProps>(
  () => import(/* webpackChunkName: "home.page" */ '~/pages/Home/home.page')
);
export const FormSelector = loadable<RouteComponentProps>(
  () =>
    import(
      /* webpackChunkName: "formselector.page" */ '~/pages/FormSelector/FormSelector.page'
    )
);
export const Search = loadable<RouteComponentProps>(
  () =>
    import(/* webpackChunkName: "search.page" */ '~/pages/Search/search.page')
);
// ********************************
// ˅˅ Do not delete these pages ˅˅
export const CorePages = {
  404: loadable<RouteComponentProps>(
    () => import(/* webpackChunkName: "notfound" */ '~/pages/NotFound')
  ),
  ZenInfo: loadable<RouteComponentProps>(
    () =>
      import(/* webpackChunkName: "versioninfo.page" */ '~/pages/VersionInfo')
  ),
};
// ˄˄ Do not delete these pages ˄˄
// ********************************
