// Import feature reducers to be included with application startup
import UIReducers from './custom/ui/reducers';
// import { reducer as FormsReducer } from 'zengenti-forms-package';
// const featureReducers = { form: FormsReducer, alerts: AlertReducer };

const featureReducers = {
  ui: UIReducers,
  // form: FormsReducer,
};

export default { ...featureReducers };
