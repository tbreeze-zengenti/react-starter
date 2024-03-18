import loadable from '@loadable/component';
// Use RouteComponentProps when you aren't using prop typings
// Also when writing types for page components, wrap your mapped props
// typing inside RouteComponentProps to apply them to
// the 'mappedEntry' prop received in your page component
// e.g. type MappedEntry = { title: string; prop2: string; };
// export type HomePageProps = RouteComponentProps<MappedEntry>;
import { RouteComponentProps } from '@zengenti/contensis-react-base';

import { HomeProps } from '~/pages/home/home.type';

export const Home = loadable<HomeProps>(
  () => import(/* webpackChunkName: "home.page" */ '~/pages/home/home.page')
);
export const Search = loadable<RouteComponentProps>(
  () =>
    import(/* webpackChunkName: "search.page" */ '~/pages/search/search.page')
);
// ********************************
// ˅˅ Do not delete these pages ˅˅
export const CorePages = {
  404: loadable<RouteComponentProps>(
    () =>
      import(
        /* webpackChunkName: "notfound" */ '~/pages/notFound/notFound.page'
      )
  ),
  ZenInfo: loadable<RouteComponentProps>(
    () =>
      import(
        /* webpackChunkName: "versioninfo.page" */ '~/pages/versionInfo/versionInfo.page'
      )
  ),
};
// ˄˄ Do not delete these pages ˄˄
// ********************************
