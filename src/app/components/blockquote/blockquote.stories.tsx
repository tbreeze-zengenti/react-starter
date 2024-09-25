import type { Meta, StoryObj } from '@storybook/react';
import Blockquote from './blockquote.component';

const meta: Meta<typeof Blockquote> = {
  title: 'Components / Blockquote',
  component: Blockquote,
  args: {
    citation: 'Citation',
    quote: 'quote',
    source: 'source',
    url: 'url',
  },
};

export default meta;

type Story = StoryObj<typeof Blockquote>;

export const BlockquoteStory: Story = {};
