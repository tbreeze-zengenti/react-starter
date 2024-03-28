import loadable from '@loadable/component';
import { RouteComponentProps } from '@zengenti/contensis-react-base/models/routing/routes';
import { ContentTemplateProps } from '~/templates/content/content.template';
import { WelcomeTemplateProps } from '~/templates/welcome/welcome.template';

export const NotFound = loadable(
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
