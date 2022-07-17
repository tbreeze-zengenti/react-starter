export const hasSiteConfig = (state: any) => {
  return state.siteConfig.isReady;
};

export const selectSiteLogo = (state: any) => {
  return state.siteConfig.config?.siteLogo;
};

export const selectSocialMedia = (state: any) => {
  return state.siteConfig.config?.socialMedia;
};

export const selectCopyright = (state: any) => {
  return state.siteConfig.config?.copyright;
};
