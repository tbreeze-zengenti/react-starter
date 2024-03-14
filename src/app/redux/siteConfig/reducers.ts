import { Draft, produce } from 'immer';

import { SET_SITE_CONFIG, GET_SITE_CONFIG_ERROR } from './types';

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

export default produce(
  (
    state: Draft<SiteConfigState>,
    action: { [key: string]: any; type: string }
  ) => {
    switch (action.type) {
      case SET_SITE_CONFIG: {
        state.title = action.config.title;
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
  },
  initialState
);
