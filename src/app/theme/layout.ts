// bp are used as a reference for media queries
// They can be utilised for between-breakpointss
// @media (min-width: ${theme.breakpoints.px.mobile}) and (max-width: ${theme.breakpoints.px.tablet}) {
//    Styles Here
// }
export const breakpoints = {
  px: {
    mobile: '480px',
    tablet: '768px',
    laptop: '992px',
    desktop: '1024px',
    largeDesktop: '1440px',
  },
};

// To use media queries follow this pattern
// @media ${theme.mq.min/max[#] {
//    Styles Here
// }
export const mq = {
  min: {
    mobile: `only screen and (min-width: ${breakpoints.px.mobile})`,
    tablet: `only screen and (min-width: ${breakpoints.px.tablet})`,
    laptop: `only screen and (min-width: ${breakpoints.px.laptop})`,
    desktop: `only screen and (min-width: ${breakpoints.px.desktop})`,
    largeDesktop: `only screen and (min-width: ${breakpoints.px.largeDesktop})`,
  },
  max: {
    mobile: `only screen and (max-width: ${breakpoints.px.mobile})`,
    tablet: `only screen and (max-width: ${breakpoints.px.tablet})`,
    laptop: `only screen and (max-width: ${breakpoints.px.laptop})`,
    desktop: `only screen and (max-width: ${breakpoints.px.desktop})`,
    largeDesktop: `only screen and (max-width: ${breakpoints.px.largeDesktop})`,
  },
};

// To use spacers follow this pattern
// Replace # with a value
// ${theme.spacing.#}

export const spacing = {
  xxxs: '0.8rem',
  xxs: '1.6rem',
  xs: '2.4rem',
  s: '3.2rem',
  m: '4rem',
  l: '6.4rem',
  xl: '8rem',
  xxl: '12rem',
  xxxl: '14.4rem',
};
