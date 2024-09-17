import React from 'react';
import {
  Renderer,
  RenderContextProvider,
  Block,
} from '@contensis/canvas-react';

import LinkBlock from './blocks/link.block';
import PanelCanvas from './blocks/panel.block';
import BlockquoteCanvas from './blocks/quote.block';

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
        _panel: PanelCanvas,
        _quote: BlockquoteCanvas,
      }}
    >
      <Renderer data={data} />
    </RenderContextProvider>
  );
};

export default Canvas;
