import type { Meta, StoryObj } from '@storybook/react';

import Icon from './icon.component';
import { icons } from './icon.dictionary';

const meta: Meta<typeof Icon> = {
  title: 'Components / Icon',
  component: Icon,
  args: {
    hidden: false,
  },
  argTypes: {
    icon: {
      type: 'string',
      control: 'select',
      options: Object.keys(icons),
    },
  },
};

export default meta;

type Story = StoryObj<typeof Icon>;

export const IconStory: Story = {};
