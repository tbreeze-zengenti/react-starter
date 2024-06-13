import type { AppState } from '@zengenti/contensis-react-base/models/redux/appstate';
import type { SearchState } from '@zengenti/contensis-react-base/search';
// import type { SiteConfigState } from '~/redux/siteConfig/reducers';

export interface ReduxState extends AppState {
  search?: SearchState;
  siteConfig: SiteConfigState;
}
