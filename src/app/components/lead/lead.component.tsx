import React from 'react';
import styled from 'styled-components';

export type LeadProps = {
  children: React.ReactNode;
  className?: string;
};

const Lead = ({ children, className }: LeadProps) => {
  return (
    <LeadStyled className={`lead ${className ? className : ''}`}>
      {children}
    </LeadStyled>
  );
};

const LeadStyled = styled.p`
  font-size: 1.25rem;
`;

export default Lead;
