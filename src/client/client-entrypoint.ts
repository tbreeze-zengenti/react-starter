// the entry point for the rest of the app
import ClientApp from '@zengenti/contensis-react-base/client';
import ReactApp from '~/App';

import routes from '~/routes';
import withReducers from '~/redux/reducers';
import withSagas from '~/redux/sagas';
import withEvents from '~/routes/withEvents';

import { AppConfig } from '@zengenti/contensis-react-base';

const config: AppConfig = {
  routes,
  stateType: 'js',
  withReducers,
  withSagas,
  withEvents,
};

new ClientApp(ReactApp, config);
