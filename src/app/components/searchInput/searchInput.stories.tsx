import type { Meta, StoryObj } from '@storybook/react';

import SearchInput from './searchInput';

const meta: Meta<typeof SearchInput> = {
  title: 'Components / Search / Input',
  component: SearchInput,
  args: {
    value: 'Peaches',
  },
};
export default meta;

type Story = StoryObj<typeof SearchInput>;

export const SearchInputStory: Story = {};
