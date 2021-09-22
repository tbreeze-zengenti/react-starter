// import React from 'react';
// import ReactLoadable from 'react-loadable';
import loadable, { OptionsWithResolver } from '@loadable/component';
// import { Loading } from '~/core/routes/Loading';

type LoadableArgs<IProps> =
  | LoadableExport.OptionsWithoutRender<IProps>
  | (() => Promise<any>)
  | { module: string }
  | string;

const Loadable = <Props = any>(
  args: LoadableArgs<Props>,
  opts?: OptionsWithResolver<Props>
) => {
  // Classic react-loadable import
  if (typeof args === 'object' && 'loader' in args)
    return loadable<Props>(args.loader, opts);

  // Pass in an async function like React.lazy(() => import('./module')); style
  if (typeof args === 'function') return loadable(args, opts);

  // Module import via a string (currently not working)
  if (typeof args === 'object' && 'module' in args)
    return loadable(() => import(`${args.module}`), opts);

  if (typeof args === 'string') return loadable(() => import(`${args}`), opts);
};

// const ClassicLoadable = <Props = any>(args: LoadableArgs<Props>) => {
//   let component: any = null;

//   // Classic react-loadable import
//   if (typeof args === 'object' && 'loader' in args && !('render' in args))
//     component = ReactLoadable<Props, typeof args.loader>({
//       loader: args.loader,
//       loading: args.loading || Loading,
//     });

//   // Pass in an async function like React.lazy(() => import('./module')); style
//   if (typeof args === 'function')
//     component = ReactLoadable<Props, typeof args>({
//       loader: args,
//       loading: Loading,
//     });

//   return component as React.ComponentType<Props>;
// };

export default Loadable;
