import type { Meta, StoryObj } from '@storybook/react';

import FilterControl from './filterControl.component';

const meta: Meta<typeof FilterControl> = {
  title: 'Components / Filter Control',
  component: FilterControl,
  args: {
    checked: false,
    disabled: false,
    id: 'control',
    label: 'Label',
    type: 'checkbox',
    mixed: false,
  },
};

export default meta;

type Story = StoryObj<typeof FilterControl>;

export const FilterControlStory: Story = {};
