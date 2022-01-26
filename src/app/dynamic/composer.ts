import loadable from '@loadable/component';

export const Link = loadable(
  () =>
    import(
      /* webpackChunkName: "example-composer-item" */ '~/components/link/Link'
    )
);
