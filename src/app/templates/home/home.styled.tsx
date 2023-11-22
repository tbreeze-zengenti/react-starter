import styled, { css } from 'styled-components';

export default styled.div`
  ${({ theme: { spacing } }) => {
    return css`
      margin: ${spacing.m} ${spacing.s};
      padding: ${spacing.xs};
    `;
  }}
`;
