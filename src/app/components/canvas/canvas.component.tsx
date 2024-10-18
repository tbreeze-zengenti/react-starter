import React from 'react';
import {
  Renderer,
  RenderContextProvider,
  Block,
} from '@contensis/canvas-react';

import LinkBlock from './blocks/link/link.block';

export type CanvasProps = { data: Block[] };

/**
 * Renders Canvas data using the Contensis Canvas React library
 * Recommended reading:
 * @link https://github.com/contensis/canvas/blob/main/apps/react/README.md
 */
const Canvas = ({ data }: CanvasProps) => {
  if (!data) return null;

  return (
    <RenderContextProvider
      blocks={{
        _link: LinkBlock,
      }}
    >
      <Renderer data={data} />
    </RenderContextProvider>
  );
};

export default Canvas;
