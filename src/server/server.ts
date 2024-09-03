import { path as appRootPath } from 'app-root-path';
import ZengentiAppServer from '@zengenti/contensis-react-base';
import ReactApp from '~/App';

import contentTypeRoutes from '~/routes/contentTypeRoutes';
import staticRoutes from '~/routes/staticRoutes';
import withEvents from '~/routes/withEvents';

import withReducers from '~/redux/reducers';
import withSagas from '~/redux/sagas';

import ServerFeatures from './features/configure';
import packagejson from '-/package.json';

ZengentiAppServer.start(
  ReactApp,
  {
    appRootPath,
    routes: {
      ContentTypeMappings: contentTypeRoutes,
      StaticRoutes: staticRoutes,
    },
    stateType: 'js',
    withReducers,
    withSagas,
    withEvents,
    disableSsrRedux: DISABLE_SSR_REDUX,
    reverseProxyPaths: Object.values(REVERSE_PROXY_PATHS),
    packagejson,
    scripts: { startup: `startup-${packagejson.version}.js` },
    staticFolderPath: STATIC_PATH,
    staticRoutePath: STATIC_PATH,
    templates: {
      html: 'dist/index.html',
      static: 'dist/index_static.html',
      fragment: 'dist/index_fragment.html',
    },
  },
  ServerFeatures
);

const app = ZengentiAppServer.app;

app.emit('ready');

export { app };
