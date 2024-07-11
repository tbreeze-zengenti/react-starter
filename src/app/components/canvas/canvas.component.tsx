import React from 'react';
import {
  Renderer,
  RenderContextProvider,
  Block,
} from '@contensis/canvas-react';

// import FormBlock from './blocks/form/formContentType.block';
import LinkBlock from './blocks/link/link.block';

// Recommended reading: https://github.com/contensis/canvas/blob/main/apps/react/README.md

const Canvas = ({ data }: { data: Block[] }) => {
  if (!data) return null;

  return (
    <RenderContextProvider
      blocks={{
        // _formContentType: FormBlock,
        _link: LinkBlock,
      }}
    >
      <Renderer data={data} />
    </RenderContextProvider>
  );
};

export default Canvas;
