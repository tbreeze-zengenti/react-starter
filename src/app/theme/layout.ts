// bp are used as a reference for media queries
// They can be utilised for between-breakpoints
// @media (min-width: ${theme.bp.xs})_ and (max-width: ${theme.bp.576}) {
//    Styles Here
// }
export const bp = {
  em: {
    '30': '30em',
    '36': '36em',
    '48': '48em',
    '62': '62em',
    '75': '75em',
    '87.5': '87.5em',
  },
  px: {
    '480': '480px',
    '576': '576px',
    '768': '768px',
    '992': '992px',
    '1200': '1200px',
    '1400': '1400px',
  },
};

// To use media queries follow this pattern
// @media ${theme.mq[#] {
//    Styles Here
// }
export const mq = {
  min: {
    30: `only screen and (min-width: ${bp.em[30]})`,
    480: `only screen and (min-width: ${bp.px[480]})`,
    576: `only screen and (min-width: ${bp.px[576]})`,
    768: `only screen and (min-width: ${bp.px[768]})`,
    992: `only screen and (min-width: ${bp.px[992]})`,
    1200: `only screen and (min-width: ${bp.px[1200]})`,
    1400: `only screen and (min-width: ${bp.px[1400]})`,
  },
  max: {
    480: `only screen and (max-width: ${bp.px[480]})`,
    576: `only screen and (max-width: ${bp.px[576]})`,
    768: `only screen and (max-width: ${bp.px[768]})`,
    992: `only screen and (max-width: ${bp.px[992]})`,
    1200: `only screen and (max-width: ${bp.px[1200]})`,
    1400: `only screen and (max-width: ${bp.px[1400]})`,
  },
};

export const container = {
  gap: '1.2rem',
  padding: {
    default: '1.6rem',
    large: '5.2rem',
  },
  margin: {
    default: '1.6rem',
    large: '5.2rem',
  },
  width: {
    default: '170rem',
    fullWidth: '100%',
    article: '80rem',
  },
};

// To use spacers follow this pattern
// Replace # with a value
// ${theme.spacing[#]}

export const spacing = {
  0.25: '0.25rem', // 4px
  0.5: '0.5rem', // 8px
  1: '1rem', // 16 px - base
  1.25: '1.25rem', // 20px
  1.5: '1.5rem', // 24px
  2: '2rem', // 32px
  2.5: '2.5rem', // 40px
  3: '3rem', // 48px
  4: '4rem', // 64px
  5: '5rem', // 80px
  6: '6rem', // 96px
  7: '7rem', // 112px
  8: '8rem', // 128px
  9: '9rem', // 144px
  10: '10rem', // 160px
  11: '11rem', // 176px
  12: '12rem', // 192px
};
