import type { Meta, StoryObj } from '@storybook/react';

import Accordion from './accordion.component';
import { accordionMapper } from './accordion.mapper';

const mockData = {
  title: 'Optional Title',
  items: [
    {
      title: 'First accordion',
      content: '<p>Includes rich text with HTML markup.</p>',
    },
    {
      title: 'Another title',
      content: '<p>More dummy content data.</p>',
    },
  ],
};

const meta: Meta<typeof Accordion> = {
  title: 'Components / Global / Accordion',
  component: Accordion,
  args: accordionMapper(mockData),
};

export default meta;
type Story = StoryObj<typeof Accordion>;

export const AccordionStory: Story = {};
