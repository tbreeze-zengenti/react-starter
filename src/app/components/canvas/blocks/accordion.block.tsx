import React from 'react';
import { ComponentBlock } from '@contensis/canvas-react';

import Accordion from '../../accordion/accordion.component';
import { accordionMapper } from '../../accordion/accordion.mapper';
import { ComponentAccordion } from '~/types/components/accordion.type';

const AccordionCanvas = ({
  block,
}: {
  block: ComponentBlock<ComponentAccordion>;
}) => {
  return !block.value ? null : <Accordion {...accordionMapper(block.value)} />;
};

export default AccordionCanvas;
