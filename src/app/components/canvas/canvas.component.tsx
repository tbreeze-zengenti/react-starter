import React from 'react';
import {
  Renderer,
  RenderContextProvider,
  Block,
} from '@contensis/canvas-react';

import LinkBlock from './blocks/link/link.block';

// Recommended reading: https://github.com/contensis/canvas/blob/main/apps/react/README.md

export type CanvasProps = { data: Block[] };
const Canvas = ({ data }: CanvasProps) => {
  if (!data) return null;

  return (
    <RenderContextProvider blocks={{ _link: LinkBlock }}>
      <Renderer data={data} />
    </RenderContextProvider>
  );
};

export default Canvas;
