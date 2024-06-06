import loadable from '@loadable/component';
import type { RouteComponentProps } from '@zengenti/contensis-react-base';
import type { ContentTemplateProps } from '~/templates/content/content.template';
import type { WelcomeTemplateProps } from '~/templates/welcome/welcome.template';

export const NotFound = loadable<RouteComponentProps<any>>(
  () =>
    import(
      /* webpackChunkName: "notFound.template" */ '~/templates/notFound/notFound.template'
    )
);

export const ZenInfo = loadable(
  () =>
    import(
      /* webpackChunkName: "zeninfo.template" */ '@zengenti/contensis-react-base/util'
    ),
  { resolveComponent: module => module.VersionInfo }
);

export const Welcome = loadable<RouteComponentProps<WelcomeTemplateProps>>(
  () =>
    import(
      /* webpackChunkName: "welcome.template" */ '~/templates/welcome/welcome.template'
    )
);

export const Content = loadable<RouteComponentProps<ContentTemplateProps>>(
  () =>
    import(
      /* webpackChunkName: "content.template" */ '~/templates/content/content.template'
    )
);

export const Search = loadable<RouteComponentProps<any>>(
  () =>
    import(
      /* webpackChunkName: "search.template" */ '~/templates/search/search.template'
    )
);
