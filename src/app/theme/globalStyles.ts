import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

const GlobalStyle = createGlobalStyle`
  /* Normalize/reset css */
  /* Comment out if you do not wish to load it */
  ${normalize}

  *,
  *::before,
  *::after {
    box-sizing: border-box;
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
`;

export default GlobalStyle;
