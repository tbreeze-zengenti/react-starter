import React from 'react';

import { PanelBlock } from '@contensis/canvas-react';
import Panel from '~/components/panel/panel.component';
import RenderInlineChildren from '../renderInlineChildren.component';

const PanelCanvas = ({ block }: { block: PanelBlock }) => {
  return (
    <Panel
      text={<RenderInlineChildren value={block.value} />}
      {...block.properties}
    />
  );
};

export default PanelCanvas;
