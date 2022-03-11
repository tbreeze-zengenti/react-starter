import styled, { css } from 'styled-components';

export default styled.div`
  ${({ theme }) => {
    return css`
      margin: ${theme.spacing[4]} ${theme.spacing[4]};
      padding: ${theme.spacing[2]};
      border: solid 1px ${theme.colors.zengenti};

      @media ${theme.mq.min[480]} {
        color: ${theme.colors.contensis};
      }

      @media ${theme.mq.min[1200]} {
        color: ${theme.colors.zengenti};
      }
    `;
  }}
`;
