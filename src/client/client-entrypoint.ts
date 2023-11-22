import { AppConfig } from '@zengenti/contensis-react-base';
import ClientApp from '@zengenti/contensis-react-base/client';
import ReactApp from '~/App';

import contentTypeRoutes from '~/routes/contentTypeRoutes';
import staticRoutes from '~/routes/staticRoutes';
import withReducers from '~/redux/reducers';
import withSagas from '~/redux/sagas';
import withEvents from '~/routes/withEvents';

const config: AppConfig = {
  routes: {
    ContentTypeMappings: contentTypeRoutes,
    StaticRoutes: staticRoutes,
  },
  stateType: 'js',
  withReducers,
  withSagas,
  withEvents,
};

new ClientApp(ReactApp, config);
