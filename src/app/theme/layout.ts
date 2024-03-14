export type SpacingKeys =
  | 'xxxs'
  | 'xxs'
  | 'xs'
  | 's'
  | 'm'
  | 'l'
  | 'xl'
  | 'xxl'
  | 'xxxl';

export type SpacingTheme = { [Key in SpacingKeys]: string };

// To use spacers follow this pattern
// Replace # with a value
// ${theme.spacing.#}
export const spacing: SpacingTheme = {
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

export type BreakpointKeys =
  | 'mobile'
  | 'largeMobile'
  | 'tablet'
  | 'laptop'
  | 'desktop'
  | 'largeDesktop';

export type BreakpointValueContext = 'px';

export type BreakpointWidthContext = 'min' | 'max';

export type BreakpointsTheme = {
  [Value in BreakpointValueContext]: { [Key in BreakpointKeys]: number };
};

export type MediaQueryTheme = {
  [Width in BreakpointWidthContext]: { [Key in BreakpointKeys]: string };
};

// bp are used as a reference for media queries
// They can be utilised for between-breakpointss
// @media (min-width: ${theme.breakpoints.px.mobile}) and (max-width: ${theme.breakpoints.px.tablet}) {
//    Styles Here
// }
export const breakpoints: BreakpointsTheme = {
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
export const mq: MediaQueryTheme = {
  min: {
    mobile: `only screen and (min-width: ${breakpoints.px.mobile}px)`,
    /** @returns 480px */
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

export type GridKeys = 'default';

export type GridContext = {
  maxWidth: string;
  gutter: string;
};

export type GridTheme = { [Key in GridKeys]: GridContext };

// To help create global wrappers/containers
// Define grid gutters and edge margins
export const grid: GridTheme = {
  default: {
    maxWidth: '140rem',
    gutter: spacing.xs,
  },
};
