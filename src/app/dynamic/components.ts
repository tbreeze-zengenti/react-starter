import loadable from '@loadable/component';

export const CoreComponents = {
  ZenInfo: loadable(
    () =>
      import(
        /* webpackChunkName: "zeninfo.component" */ '@zengenti/contensis-react-base/util'
      ),
    { resolveComponent: module => module.VersionInfo }
  ),
};

export const Composer = loadable(
  () =>
    import(/* webpackChunkName: "composer" */ '~/components/composer/composer')
);

export const Canvas = loadable(
  () =>
    import(
      /* webpackChunkName: "canvas" */ '~/components/canvas/canvas.component'
    )
);
