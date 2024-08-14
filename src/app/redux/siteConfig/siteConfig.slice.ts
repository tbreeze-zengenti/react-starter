import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import type { ReduxState } from '../redux.type';
import type { SiteConfigMappedProps } from './siteConfig.mapper';

export type SiteConfigState = {
  mappedEntry: SiteConfigMappedProps | null;
  isLoading: boolean;
  isReady: boolean;
  isError: boolean;
  error: any | unknown;
};

const initialState: SiteConfigState = {
  mappedEntry: null,
  isLoading: false,
  isReady: false,
  isError: false,
  error: null,
};

const siteConfigSlice = createSlice({
  name: 'config',
  initialState,
  reducers: {
    getSiteConfig(state) {
      state.isLoading = true;
    },
    setSiteConfig(state, action: PayloadAction<SiteConfigMappedProps>) {
      state.mappedEntry = action.payload;
      state.isLoading = false;
      state.isReady = true;
      state.isError = false;
      state.error = null;
    },
    getSiteConfigError(state, action: PayloadAction<any | unknown>) {
      state.isError = true;
      state.error = action.payload;
    },
  },
});

export const { getSiteConfig, setSiteConfig, getSiteConfigError } =
  siteConfigSlice.actions;

export default siteConfigSlice.reducer;

export const selectSiteConfig = (state: ReduxState) => {
  return state?.siteConfig;
};

export const selectSiteConfigReady = (state: ReduxState) => {
  return selectSiteConfig(state)?.isReady;
};

export const selectSiteConfigEntry = (state: ReduxState) => {
  return selectSiteConfig(state)?.mappedEntry;
};
