import React from 'react';
import styled from 'styled-components';

export type VisuallyHiddenProps = {
  children: React.ReactNode;
};
/**
 * https://www.a11yproject.com/posts/how-to-hide-content/
 */
const VisuallyHidden = ({ children }: VisuallyHiddenProps) => {
  return (
    <VisuallyHiddenStyled className="visually-hidden">
      {children}
    </VisuallyHiddenStyled>
  );
};

const VisuallyHiddenStyled = styled.span``;

export default VisuallyHidden;
