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

// bp are used as a reference for media queries
// They can be utilised for between-breakpointss
// @media (min-width: ${theme.breakpoints.px.mobile}) and (max-width: ${theme.breakpoints.px.tablet}) {
//    Styles Here
// }
export const breakpoints = {
  px: {
    mobile: 480,
    largeMobile: 640,
    tablet: 768,
    laptop: 992,
    desktop: 1024,
    largeDesktop: 1440,
  },
};

// To use media queries follow this pattern
// @media ${theme.mq.min/max[#] {
//    Styles Here
// }
export const mq = {
  min: {
    mobile: `only screen and (min-width: ${breakpoints.px.mobile}px)`,
    largeMobile: `only screen and (min-width: ${breakpoints.px.largeMobile}px)`,
    tablet: `only screen and (min-width: ${breakpoints.px.tablet}px)`,
    laptop: `only screen and (min-width: ${breakpoints.px.laptop}px)`,
    desktop: `only screen and (min-width: ${breakpoints.px.desktop}px)`,
    largeDesktop: `only screen and (min-width: ${breakpoints.px.largeDesktop}px)`,
  },
  max: {
    mobile: `only screen and (max-width: ${breakpoints.px.mobile}px)`,
    largeMobile: `only screen and (max-width: ${breakpoints.px.largeMobile}px)`,
    tablet: `only screen and (max-width: ${breakpoints.px.tablet}px)`,
    laptop: `only screen and (max-width: ${breakpoints.px.laptop}px)`,
    desktop: `only screen and (max-width: ${breakpoints.px.desktop}px)`,
    largeDesktop: `only screen and (max-width: ${breakpoints.px.largeDesktop}px)`,
  },
};

// To help create global wrappers/containers
// Define grid gutters and edge margins
export const grid = {
  default: {
    width: '140rem',
    gutter: spacing.xs,
    margin: spacing.xs,
  },
};
