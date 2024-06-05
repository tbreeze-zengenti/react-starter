import { AppState } from '@zengenti/contensis-react-base/models/redux/appstate';
import { SearchState } from '@zengenti/contensis-react-base/search';
// import { SiteConfigState } from '~/redux/siteConfig/reducers';

export interface ReduxState extends AppState {
  search?: SearchState;
  // siteConfig: SiteConfigState;
}
