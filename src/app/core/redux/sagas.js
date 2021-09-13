// Import feature sagas to be included with application startup
// import { sagas as formSagas } from 'zengenti-forms-package';
import { UISagas } from './custom/ui/sagas';

const featureSagas = [
  ...UISagas,
  //...formSagas
];

export default featureSagas;
