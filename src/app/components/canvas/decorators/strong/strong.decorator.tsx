import React from 'react';
import { Strong as StrongCanvas } from '@contensis/canvas-react';
import { RenderDecoratorProps } from '~/components/canvas/canvas.types';

const Strong = (props: RenderDecoratorProps) => {
  return <StrongCanvas.Children {...props} />;
};

export default Strong;
