import React from 'react';

import {
  QuoteBlock,
  RenderBlockProps,
  RenderChildren,
} from '@contensis/canvas-react';
import Blockquote from '~/components/blockquote/blockquote.component';

const BlockquoteCanvas = (props: RenderBlockProps<QuoteBlock>) => {
  return (
    <Blockquote
      quote={<RenderChildren {...props} />}
      {...props?.block.properties}
    />
  );
};

export default BlockquoteCanvas;
