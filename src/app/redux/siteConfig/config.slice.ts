import { createSlice } from '@reduxjs/toolkit';
import { mapJson } from '@zengenti/contensis-react-base/util';
import { SiteConfigMapper } from './siteConfig.mapper';

interface ConfigState {
  config: any;
  isReady: boolean;
  isError: boolean;
  error: any;
}

const initialState: ConfigState = {
  config: null,
  isReady: false,
  isError: false,
  error: null,
};

const configSlice = createSlice({
  name: 'config',
  initialState,
  reducers: {
    setSiteConfig(state, action) {
      console.log(state, action);
      const config = mapJson(action.payload?.config, SiteConfigMapper);
      state.config = config;
      state.isReady = true;
      state.isError = false;
      state.error = null;
    },
    getSiteConfigError(state, action) {
      state.isError = true;
      state.error = 'error';
    },
  },
});

export const { setSiteConfig, getSiteConfigError } = configSlice.actions;

export default configSlice.reducer;
