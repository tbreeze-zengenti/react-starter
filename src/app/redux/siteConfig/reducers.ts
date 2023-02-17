import { Draft, produce } from 'immer';
import { mapJson } from '@zengenti/contensis-react-base/util';

import { SET_SITE_CONFIG, GET_SITE_CONFIG_ERROR } from './types';
import { SiteConfigMapper } from './siteConfig.mapper';

export interface SiteConfigState {
  config: any;
  isReady: boolean;
  isError: boolean;
  error: any;
}

const initialState: SiteConfigState = {
  config: null,
  isReady: false,
  isError: false,
  error: null,
};

export default produce((state: Draft<SiteConfigState>, action: any) => {
  switch (action.type) {
    case SET_SITE_CONFIG: {
      const siteConfig = mapJson(action.siteConfig, SiteConfigMapper);
      state.config = siteConfig;
      state.isReady = true;
      state.isError = false;
      state.error = null;
      return;
    }
    case GET_SITE_CONFIG_ERROR: {
      state.isError = true;
      state.error = action.error;
      return;
    }
    default:
      return state;
  }
}, initialState);
