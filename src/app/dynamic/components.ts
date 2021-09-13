import Loadable from './loadable';

// Props Models
// import { Props as ComposerProps } from '~/components/composer/ComposerWrapper';

// Component exports
// export const Composer = Loadable<ComposerProps>(
//   () =>
//     import(
//       /* webpackChunkName: "composer-wrapper" */ '~/components/composer/ComposerWrapper'
//     )
// );

export const CoreComponents = {
  ZenInfo: Loadable(() =>
    import(
      /* webpackChunkName: "zeninfo.component" */ '@zengenti/contensis-react-base/util'
    ).then(module => module.VersionInfo)
  ),
};
