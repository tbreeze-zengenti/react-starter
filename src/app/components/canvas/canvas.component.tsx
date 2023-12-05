import React from 'react';
import {
  Renderer,
  RenderContextProvider,
  Block,
} from '@contensis/canvas-react';
// import { Table, Sample, Strong } from '~/dynamic/canvas';

const Canvas = ({ data }: { data: Block[] }) => {
  return (
    <RenderContextProvider
    // Override default rendering of content blocks
    //  blocks={{ _table: Table }}
    // Components within the canvas
    //  components={{ alTest: Sample }}
    // HTML elements which commonly wrap text
    //  decorators={{ strong: Strong }}
    >
      <Renderer data={data} />
    </RenderContextProvider>
  );
};

export default Canvas;
