import loadable from '@loadable/component';

export const CoreComponents = {
  ZenInfo: loadable(
    () =>
      import(
        /* webpackChunkName: "zeninfo.component" */ '@zengenti/contensis-react-base/util'
      ),
    { resolveComponent: (module: any) => module.VersionInfo }
  ),
};

export const Composer = loadable(
  () =>
    import(/* webpackChunkName: "composer" */ '~/features/composer/composer')
);
