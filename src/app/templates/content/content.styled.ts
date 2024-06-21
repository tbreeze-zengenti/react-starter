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
`;

export default ContentPageStyled;
