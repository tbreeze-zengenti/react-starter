export const hasSiteConfig = (state: any) => {
  return state.config.isReady;
};

export const selectSiteLogo = (state: any) => {
  return state.config.config?.siteLogo;
};

export const selectSocialMedia = (state: any) => {
  return state.config.config?.socialMedia;
};

export const selectCopyright = (state: any) => {
  return state.config.config?.copyright;
};
