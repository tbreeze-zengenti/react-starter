import type { Meta, StoryObj } from '@storybook/react';

import Lead from './lead.component';

const meta: Meta<typeof Lead> = {
  title: 'Components / Lead',
  component: Lead,
  args: {
    children:
      'A lead paragraph that introduces content and is slighly larger than the body',
  },
};

export default meta;

type Story = StoryObj<typeof Lead>;

export const LeadStory: Story = {};
