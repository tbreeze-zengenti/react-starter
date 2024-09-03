import styled from 'styled-components';
import {
  exampleBentoBoxes,
  exampleLayout,
  exampleLogo,
  exampleVariables,
} from '../welcome/welcome.styled';

const ContentPageStyled = styled.div`
  ${exampleVariables};
  ${exampleLayout};
  ${exampleLogo};
  ${exampleBentoBoxes};

  h1 {
    font-weight: normal;
  }

  .article-content {
    margin-inline: auto;
    max-width: fit-content;
  }

  .article-content > * + * {
    margin-block-start: 0.625em;
    max-width: 70ch;
  }
`;

export default ContentPageStyled;
