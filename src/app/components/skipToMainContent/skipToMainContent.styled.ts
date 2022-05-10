import styled, { css } from 'styled-components';

import { HashLink } from 'react-router-hash-link';

const skipToMainContentStyled = styled(HashLink)`
  ${() => {
    return css`
      position: absolute;
      width: 1px;
      height: 1px;
      margin: 0;
      overflow: hidden;
      clip: rect(0 0 0 0);
      white-space: nowrap;

      display: block;
      padding: 1.2rem 1.6rem;
      text-decoration: underline;
      text-decoration-thickness: 1px;
      text-underline-offset: 1px;

      :focus {
        position: static;
        width: auto;
        height: auto;
        margin: inherit;
        overflow: visible;
        clip: auto;
        clip-path: none;
        white-space: inherit;

        color: white;
        background-color: black;
      }
    `;
  }}
`;

export default skipToMainContentStyled;
