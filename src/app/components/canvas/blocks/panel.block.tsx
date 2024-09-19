import React from 'react';

import {
  PanelBlock,
  RenderBlockProps,
  RenderChildren,
} from '@contensis/canvas-react';
import Panel from '~/components/panel/panel.component';

const PanelCanvas = (props: RenderBlockProps<PanelBlock>) => {
  return (
    <Panel text={<RenderChildren {...props} />} {...props?.block.properties} />
  );
};

export default PanelCanvas;
