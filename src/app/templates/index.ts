import loadable from '@loadable/component';

export const Welcome = loadable<any>(
  () =>
    import(
      /* webpackChunkName: "welcome.template" */ '~/templates/welcome/welcome.template'
    )
);

export const Content = loadable<any>(
  () =>
    import(
      /* webpackChunkName: "content.template" */ '~/templates/content/content.template'
    )
);

export const Search = loadable<any>(
  () =>
    import(
      /* webpackChunkName: "search.template" */ '~/templates/search/search.template'
    )
);

export const NotFound = loadable<any>(
  () =>
    import(
      /* webpackChunkName: "notFound.template" */ '~/templates/notFound/notFound.template'
    )
);

export const ZenInfo = loadable<any>(
  () =>
    import(
      /* webpackChunkName: "zeninfo.template" */ '@zengenti/contensis-react-base/util'
    ),
  { resolveComponent: module => module.VersionInfo }
);
