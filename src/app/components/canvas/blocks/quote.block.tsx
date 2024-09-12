import React from 'react';

import { QuoteBlock } from '@contensis/canvas-react';
import Blockquote from '~/components/blockquote/blockquote.component';
import RenderInlineChildren from '../renderInlineChildren.component';

const BlockquoteCanvas = ({ block }: { block: QuoteBlock }) => {
  return (
    <Blockquote
      quote={<RenderInlineChildren value={block.value} />}
      {...block.properties}
    />
  );
};

export default BlockquoteCanvas;
