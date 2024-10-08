import { createGlobalStyle } from 'styled-components';

/**
 * A global print style sheet
 * Attempts to create a baseline for print styles
 * @see App.tsx for implementation
 */

const PrintStyle = createGlobalStyle`
  @media print {
    /** Reset */
    *, *:before, *:after, p:first-letter, div:first-letter, blockquote:first-letter, 
    li:first-letter, p:first-line, div:first-line, blockquote:first-line, li:first-line {
      background: transparent !important;
      color: #000 !important;
      box-shadow: none !important;
      text-shadow: none !important;
    }

    html {
      font-size: 16px;
      margin: 0;
      padding: 0;
    }

    body {
      -moz-osx-font-smoothing: grayscale;
      -webkit-font-smoothing: antialiased;
      background: #fff !important;
      color: #000 !important;
      font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
      font-size: 1rem;
      line-height: 1.5;
      margin: 0 auto;
      padding: 2.54cm 1.8cm;
      text-rendering: optimizeLegibility;
    }

    /* Text Elements */
    p, blockquote, table, ul, ol, dl {
      margin-top: 0;
      margin-bottom: 1.5rem;
    }

    p:last-child, ul:last-child, ol:last-child {
      margin-bottom: 0;
    }

    h1, h2, h3, h4, h5, h6 {
      color: #000;
      font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
      line-height: 1.2;
      margin-top: 0;
      margin-bottom: 0.75rem;
      page-break-after: avoid;
      page-break-inside: avoid;
    }

    h1 { font-size: 2.5rem; }
    h2 { font-size: 2rem; }
    h3 { font-size: 1.75rem; }
    h4 { font-size: 1.5rem; }
    h5 { font-size: 1.25rem; }
    h6 { font-size: 1rem; }

    /* Links */
    a, a:visited {
      color: #000;
      text-decoration: underline;
      word-wrap: break-word;
    }

    a[href^='http']:after, a[href^='ftp']:after {
      content: ' (' attr(href) ')';
      font-size: 80%;
    }

    a[href$='.jpg']:after, a[href$='.jpeg']:after, 
    a[href$='.gif']:after, a[href$='.png']:after {
      display: none;
    }

    a.no-reformat:after {
      content: '';
    }

    /* Tables */
    table {
      border-collapse: collapse;
      page-break-inside: avoid;
    }

    th, td {
      border-bottom: 1px solid #000;
      padding: 8px 16px;
      page-break-inside: avoid;
    }

    thead {
      display: table-header-group;
    }

    /* Code and Preformatted Text */
    code, pre, kbd {
      border: 1px solid #bbb;
      font-family: Menlo, Monaco, Consolas, 'Courier New', monospace;
      font-size: 85%;
    }

    code, kbd {
      padding: 3px;
    }

    pre {
      padding: 10px 12px;
      margin-bottom: 1.5rem;
      white-space: pre-wrap !important;
      word-wrap: break-word;
    }

    pre code, pre kbd {
      border: 0;
    }

    /* Blockquotes */
    blockquote {
      border-left: 5px solid #bbb;
      margin-left: 1px;
      padding: 12px 1.5rem;
      page-break-inside: avoid;
    }

    [dir='rtl'] blockquote {
      border-left: 0;
      border-right: 5px solid #bbb;
      margin-left: 0;
      margin-right: 1px;
    }

    blockquote:first-child {
      margin-top: 0;
    }

    blockquote p:last-child, blockquote ul:last-child, blockquote ol:last-child {
      margin-bottom: 0;
    }

    blockquote footer {
      display: block;
      font-size: 80%;
    }

    /* Images */
    img {
      border: 0;
      display: block;
      max-width: 100% !important;
      page-break-after: auto;
      page-break-before: auto;
      page-break-inside: avoid;
    }

    /* Horizontal Rules */
    hr {
      border: 0;
      border-bottom: 2px solid #bbb;
      margin: 2.25rem 0;
    }

    /* Definitions */
    dt {
      font-weight: bold;
    }

    dd {
      margin: 0 0 0.75rem;
    }

    /* Abbreviations */
    abbr[title], acronym[title] {
      border: 0;
      text-decoration: none;
    }

    abbr[title]:after, acronym[title]:after {
      content: ' (' attr(title) ')';
    }

    abbr[title].no-reformat:after, acronym[title].no-reformat:after {
      content: '';
    }

    .no-reformat abbr:after, .no-reformat acronym:after, .no-reformat a:after {
      content: '';
    }

    /* Print Breaks */
    .page-break, .break-before, .page-break-before {
      page-break-before: always;
    }

    .break-after, .page-break-after {
      page-break-after: always;
    }

    .avoid-break-inside {
      page-break-inside: avoid;
    }

    /* Placeholder Text */
    ::-webkit-input-placeholder, :-moz-placeholder, ::-moz-placeholder, :-ms-input-placeholder {
      color: transparent;
    }

    /* Orphans and Widows */
    h2, h3, h4, p, a {
      orphans: 3;
      widows: 3;
    }

    h1 + p, h2 + p, h3 + p {
      page-break-before: avoid;
    }

    /* No Print */
    .no-print {
      display: none;
    }
  }
`;

export default PrintStyle;
