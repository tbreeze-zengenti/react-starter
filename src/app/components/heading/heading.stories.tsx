import type { Meta, StoryObj } from '@storybook/react';

import Heading, { HeadingProps } from './heading.component';

const meta: Meta<typeof Heading> = {
  title: 'Components / Heading',
  component: Heading,
  argTypes: {
    level: {
      control: 'select',
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'] as HeadingProps['level'][],
    },
  },
  args: {
    children: 'Example Title',
    level: 'h1',
  },
};

export default meta;

type Story = StoryObj<typeof Heading>;

export const HeadingStory: Story = {};
