import React from 'react';

import { SkipToMainContentProps } from './skipToMainContent.types';
import SkipToMainContentStyled from './skipToMainContent.styled';

const SkipToMainContent = ({ skipPath = '#main' }: SkipToMainContentProps) => {
  return (
    <SkipToMainContentStyled to={skipPath}>
      Skip to main content
    </SkipToMainContentStyled>
  );
};

export default SkipToMainContent;
