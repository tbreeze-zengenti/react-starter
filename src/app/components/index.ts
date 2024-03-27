import loadable from '@loadable/component';

export const Composer = loadable<any>(
  () =>
    import(/* webpackChunkName: "composer" */ '~/components/composer/composer')
);

export const Canvas = loadable<any>(
  () =>
    import(
      /* webpackChunkName: "canvas" */ '~/components/canvas/canvas.component'
    )
);

export const Markup = loadable<any>(
  () => import(/* webpackChunkName: "markup" */ '~/components/markup/markup')
);
