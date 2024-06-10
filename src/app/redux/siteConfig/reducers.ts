import { Draft, produce } from 'immer';
import { Reducer } from 'redux';
import { SET_SITE_CONFIG, GET_SITE_CONFIG_ERROR } from './types';
import type { SiteConfigMappedProps } from '~/redux/siteConfig/siteConfig.mapper';

type SetSiteConfigAction = {
  type: typeof SET_SITE_CONFIG;
  mappedEntry: SiteConfigMappedProps;
};
type GetSiteConfigErrorAction = {
  type: typeof GET_SITE_CONFIG_ERROR;
  error: any | unknown;
};

type SiteConfigAction = SetSiteConfigAction & GetSiteConfigErrorAction;

export type SiteConfigState = {
  mappedEntry: SiteConfigMappedProps | null;
  isReady: boolean;
  isError: boolean;
  error: any | unknown;
};
const initialState: SiteConfigState = {
  isReady: false,
  isError: false,
  error: null,
  mappedEntry: null,
};
const siteConfigReducer: Reducer<SiteConfigState, SiteConfigAction> = produce(
  (draft: Draft<SiteConfigState>, action: SiteConfigAction) => {
    switch (action.type) {
      case SET_SITE_CONFIG: {
        draft.mappedEntry = action.mappedEntry;
        draft.isReady = true;
        draft.isError = false;
        draft.error = null;
        break;
      }
      case GET_SITE_CONFIG_ERROR: {
        draft.isError = true;
        draft.error = action.error;
        break;
      }
      default:
        break;
    }
  },
  initialState
);

export default siteConfigReducer;
