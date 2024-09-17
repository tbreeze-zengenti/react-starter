import React from 'react';
import styled from 'styled-components';
import { panels } from '~/theme/panel';

export type PanelProps = {
  text: React.ReactNode | string;
  panelType?: 'info' | 'note' | 'warning' | 'success' | 'error';
  className?: string;
};

const Panel = ({ text, panelType = 'info', className }: PanelProps) => {
  return (
    <PanelStyled
      panelType={panelType}
      className={`panel panel--${panelType} ${className ? className : ''}`}
    >
      <span className="sr-only">{panelType} </span>
      {text}
    </PanelStyled>
  );
};

export default Panel;

const PanelStyled = styled.div<Pick<PanelProps, 'panelType'>>`
  padding-inline-start: 0.5em;
  border-left: 4px solid ${p => panels[p.panelType ?? 'info'].border};
`;
