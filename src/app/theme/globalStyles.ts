import { createGlobalStyle } from 'styled-components';

import colors from './colors';
import { mq, spacing } from './layout';

const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  /* CSS Variables */
  :root {
    --flow: ${spacing[0.5]};
    --colorWhite: #ffffff;
    --primaryWhite: ${colors.primary.white}
  }

  @media ${mq.min[480]} {
    :root {
      --flow: ${spacing[1]};
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
    font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;
    font-size: 62.5%;
  }

  /* Set core root defaults */
  html:focus-within {
    scroll-behavior: smooth;
  }

  /* Sets base font to 16px */
  body {
    min-height: 100vh;
    font-size: 1.6rem;
    font-weight: normal;
    line-height: 1.5;
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


  .my-node-enter {
    opacity: 0;
  }
  .my-node-enter-active {
    opacity: 1;
    transition: opacity 1000ms;
  }
  .my-node-exit {
    opacity: 1;
  }
  .my-node-exit-active {
    opacity: 0;
    transition: opacity 1000ms;
  }
`;

export default GlobalStyle;
