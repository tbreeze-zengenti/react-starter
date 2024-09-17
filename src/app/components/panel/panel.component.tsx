import React from 'react';
import styled from 'styled-components';
import { panels } from '~/theme/panel';

type PanelProps = {
  text: string;
  panelType: 'information' | 'note' | 'warning' | 'success' | 'error';
  className?: string;
};

const Panel = ({ text, panelType = 'information', className }: PanelProps) => {
  return (
    <PanelStyled
      panelType={panelType}
      className={`panel panel--${panelType} ${className}`}
    >
      {text}
    </PanelStyled>
  );
};

export default Panel;

const PanelStyled = styled.div<{ panelType: PanelProps['panelType'] }>`
  border-left: 4px solid ${p => panels[p.panelType].border};
  padding: ${p => p.theme.spacing.xs};
  margin: ${p => p.theme.spacing.xs};
  background-color: #d7d7d7;
  color: black;
  width: max-content;
  font-size: 1rem;
  text-align: center;
  cursor: pointer;
  transition: all 0.2s;
`;
