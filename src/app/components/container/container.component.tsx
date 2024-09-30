import React from 'react';
import styled from 'styled-components';

export type ContainerProps = {
  children: React.ReactNode;
  className?: string;
};

const Container = ({ children, className }: ContainerProps) => {
  return (
    <ContainerStyled className={`container ${className ? className : ''}`}>
      {children}
    </ContainerStyled>
  );
};

const ContainerStyled = styled.div``;

export default Container;
