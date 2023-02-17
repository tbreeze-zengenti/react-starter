import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';
import { printCSS } from './patterns/print';

import { colors } from './tokens/colors';
import { mq, spacing } from './tokens/layout';
import { typography } from './tokens/typography';

const GlobalStyle = createGlobalStyle`
  /* Normalize/reset css */
  ${normalize}
  ${printCSS}

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  /* CSS Variables */
  :root {
    --flow: ${spacing.xs};
    --colorWhite: #ffffff;
    --primaryWhite: ${colors.primary.white}
  }

  @media ${mq.min.mobile} {
    :root {
      --flow: ${spacing.s};
    }
  }

  /* Resets the z-index stacking order */
  #root {
    isolation: isolate;
  }

  /* Remove default margin */
  body,
  h1,
  h2,
  h3,
  h4,
  p,
  figure,
  blockquote,
  dl,
  dd {
    margin: 0;
  }

  /* Remove list styles on ul, ol elements with a list role, which suggests default styling will be removed */
  ul[role='list'],
  ol[role='list'] {
    list-style: none;
  }

  /* this sets 1rem to 10px */
  html, body {
    font-family: ${typography.family.body};
    font-size: 62.5%;
  }

  /* Set core root defaults */
  html:focus-within {
    scroll-behavior: smooth;
  }

  /* Sets base font to 16px */
  body {
    min-height: 100vh;
    font-size: ${typography.size.base};
    font-weight: ${typography.weight.normal};
    line-height: ${typography.lineHeight.base};
    text-rendering: optimizeSpeed;
  }

  /* A elements that don't have a class get default styles */
  a:not([class]) {
    text-decoration-skip-ink: auto;
  }

  /* Make images easier to work with */
  img,
  picture {
    max-width: 100%;
    display: block;
  }

  /* Inherit fonts for inputs and buttons */
  input,
  button,
  textarea,
  select {
    font: inherit;
  }

  /* Remove all animations, transitions and smooth scroll for people that prefer not to see them */
  @media (prefers-reduced-motion: reduce) {
    html:focus-within {
    scroll-behavior: auto;
    }
    
    *,
    *::before,
    *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
    }
  }

  /* https://www.a11yproject.com/posts/how-to-hide-content/ */
  .visually-hidden,
  .sr-only {
    clip: rect(0 0 0 0);
    clip-path: inset(50%);
    height: 1px;
    overflow: hidden;
    position: absolute;
    white-space: nowrap;
    width: 1px;
  }

  /* https://piccalil.li/quick-tip/flow-utility/ */
  /* If --flow doesn't exist it'll default to 1em */
  .flow > * + * {
    margin-top: var(--flow, 1em);
  }
`;

export default GlobalStyle;
