import Loadable from './loadable';

export const Link = Loadable(
  () =>
    import(
      /* webpackChunkName: "example-composer-item" */ '~/features/link/Link'
    )
);
