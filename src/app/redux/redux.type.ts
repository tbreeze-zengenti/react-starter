import { AppState } from '@zengenti/contensis-react-base/models/redux/appstate';
import { SiteConfigState } from '~/redux/siteConfig/reducers';

export type ReduxState = AppState & {
  siteConfig: SiteConfigState;
};
