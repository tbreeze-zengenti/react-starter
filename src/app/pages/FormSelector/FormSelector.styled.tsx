import styled, { css } from 'styled-components';

export default styled.div`
  ${({ theme: { spacing } }) => {
    return css`
      margin: ${spacing.m} ${spacing.s};
      padding: ${spacing.xs};

      pre {
        background: #eee;
        text-wrap: wrap;
        padding: 1em;
        border: 1px solid black;
        border-radius: 10px;
        font-size: 80%;
      }
    `;
  }}
`;
