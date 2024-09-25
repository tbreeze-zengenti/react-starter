import React from 'react';
import { CodeBlock } from '@contensis/canvas-react';

import Code from '~/components/code/code.component';

const CodeCanvas = ({ block }: { block: CodeBlock }) => {
  return (
    <Code
      {...{
        caption: block.value?.caption,
        code: block.value?.code ?? '',
        language: block.value?.language ?? 'javascript',
      }}
    />
  );
};

export default CodeCanvas;
