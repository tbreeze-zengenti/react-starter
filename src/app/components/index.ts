import loadable from '@loadable/component';

export const Composer = loadable(
  () =>
    import(
      /* webpackChunkName: "composer" */ '~/components/composer/composer.component'
    )
);

export const Canvas = loadable(
  () =>
    import(
      /* webpackChunkName: "canvas" */ '~/components/canvas/canvas.component'
    )
);

export const Markup = loadable(
  () =>
    import(
      /* webpackChunkName: "markup" */ '~/components/richText/markup.component'
    )
);
