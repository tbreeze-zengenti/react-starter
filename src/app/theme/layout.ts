/**
 * To use spacers follow this pattern
 * Replace # with a value
 * @example - ${theme.spacing.#}
 */
export const spacing = {
  xxxs: '0.25rem',
  xxs: '0.5rem',
  xs: '1rem',
  s: '1.5rem',
  m: '2rem',
  l: '2.5rem',
  xl: '4rem',
  xxl: '5rem',
  xxxl: '7.5rem',
  superxl: '15rem',
};

/**
 * Breakpoints are used as a reference for media queries
 * They can be utilised for between-breakpoints
 * @example - @media (min-width: ${theme.breakpoints.mobile}) and (max-width: ${theme.breakpoints.tablet})
 */
export const breakpoints = {
  mobile: 30,
  tablet: 48,
  laptop: 62,
  desktop: 68.75 /** @returns 1100px */,
  largeDesktop: 90 /** @returns 1440px */,
};

/**
 * To use media queries follow this pattern
 * @example -  @media ${theme.mq.min/max[#]}
 */
export const mq = {
  min: {
    mobile: `only screen and (min-width: ${breakpoints.mobile}rem)`,
    tablet: `only screen and (min-width: ${breakpoints.tablet}rem)`,
    laptop: `only screen and (min-width: ${breakpoints.laptop}rem)`,
    desktop: `only screen and (min-width: ${breakpoints.desktop}rem)`,
    largeDesktop: `only screen and (min-width: ${breakpoints.largeDesktop}rem)`,
  },
  max: {
    mobile: `only screen and (max-width: ${breakpoints.mobile}rem)`,
    tablet: `only screen and (max-width: ${breakpoints.tablet}rem)`,
    laptop: `only screen and (max-width: ${breakpoints.laptop}rem)`,
    desktop: `only screen and (max-width: ${breakpoints.desktop}rem)`,
    largeDesktop: `only screen and (max-width: ${breakpoints.largeDesktop}rem)`,
  },
};

/**
 * To help create global wrappers/containers
 * Define grid gutters and edge margins
 */
export const grid = {
  default: {
    maxWidth: '90rem',
    gutter: spacing.xs,
    margin: spacing.xs,
  },
};
