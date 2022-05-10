import styled, { css } from 'styled-components';

export default styled.div`
  ${({ theme: { colors, spacing, mq } }) => {
    return css`
      margin: ${spacing.m} ${spacing.s};
      padding: ${spacing.xs};
      border: solid 1px ${colors.zengenti};

      @media ${mq.min.mobile} {
        color: ${colors.contensis};
      }

      @media ${mq.min.desktop} {
        color: ${colors.zengenti};
      }
    `;
  }}
`;
