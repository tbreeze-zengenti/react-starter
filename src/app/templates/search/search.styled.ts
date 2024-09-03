import styled from 'styled-components';
import {
  exampleBentoBoxes,
  exampleLayout,
  exampleLogo,
  exampleVariables,
} from '../welcome/welcome.styled';

const SearchPageStyled = styled.div`
  ${exampleVariables};
  ${exampleLayout};
  ${exampleLogo};
  ${exampleBentoBoxes};

  .bento-box {
    min-height: 400px;

    .bento-box__title {
      margin: 0;
    }

    .bento-box__results {
      margin-block-start: 0.875em;
    }

    .bento-box__paging {
      margin-block-start: 0.875em;
    }
  }
`;

export default SearchPageStyled;
