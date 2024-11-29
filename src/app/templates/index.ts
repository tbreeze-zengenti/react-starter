import loadable from '@loadable/component';

export const Welcome = loadable(
  () => import('~/templates/welcome/welcome.template')
);

export const Content = loadable(
  () => import('~/templates/content/content.template')
);

export const Search = loadable(
  () => import('~/templates/search/search.template')
);

export const NotFound = loadable(
  () => import('~/templates/notFound/notFound.template')
);

export const ZenInfo = loadable(
  () => import('@zengenti/contensis-react-base/util'),
  { resolveComponent: module => module.VersionInfo }
);
