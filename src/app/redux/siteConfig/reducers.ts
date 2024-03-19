import { Draft, produce } from 'immer';
import { Reducer } from 'redux';

import { SET_SITE_CONFIG, GET_SITE_CONFIG_ERROR } from './types';

type SiteConfigAction =
  | { type: typeof SET_SITE_CONFIG; config: { title: string } }
  | { type: typeof GET_SITE_CONFIG_ERROR; error: any | unknown };

export type SiteConfigState = {
  isReady: boolean;
  isError: boolean;
  error: any | unknown;
  title: string | null;
};

const initialState: SiteConfigState = {
  isReady: false,
  isError: false,
  error: null,
  title: null,
};
const siteConfigReducer: Reducer<SiteConfigState, SiteConfigAction> = produce(
  (draft: Draft<SiteConfigState>, action: SiteConfigAction) => {
    switch (action.type) {
      case SET_SITE_CONFIG: {
        const { title } = action.config;
        draft.title = title;
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
