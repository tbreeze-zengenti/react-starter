import type { AppState } from '@zengenti/contensis-react-base';
import type { SearchState } from '@zengenti/contensis-react-base/search';
import type { SiteConfigState } from './siteConfig/siteConfig.slice';

export interface ReduxState extends AppState {
  search?: SearchState;
  siteConfig?: SiteConfigState;
}
