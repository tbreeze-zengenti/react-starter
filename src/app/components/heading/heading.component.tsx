import React from 'react';
import styled, { css } from 'styled-components';

export type HeadingProps = {
  level: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  children: React.ReactNode;
  className?: string;
};

const Heading = ({ level = 'h3', children, className }: HeadingProps) => {
  return (
    <HeadingStyled
      as={level}
      className={`heading heading--${level} ${className ? className : ''}`}
    >
      {children}
    </HeadingStyled>
  );
};

const HeadingStyled = styled.h3`
  ${() => {
    return css``;
  }}
`;

export default Heading;
