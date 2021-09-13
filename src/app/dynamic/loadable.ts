import React from 'react';
import ReactLoadable from 'react-loadable';
import { Loading } from '~/core/routes/Loading';

type LoadableArgs<IProps> =
  | LoadableExport.OptionsWithoutRender<IProps>
  | (() => Promise<any>)
  | { module: string }
  | string;

const Loadable = <Props = any>(args: LoadableArgs<Props>) => {
  let component: any = null;

  // Classic react-loadable import
  if (typeof args === 'object' && 'loader' in args && !('render' in args))
    component = ReactLoadable<Props, typeof args.loader>({
      loader: args.loader,
      loading: args.loading || Loading,
    });

  // Pass in an async function like React.lazy(() => import('./module')); style
  if (typeof args === 'function')
    component = ReactLoadable<Props, typeof args>({
      loader: args,
      loading: Loading,
    });

  return component as React.ComponentType<Props>;
};

export default Loadable;
