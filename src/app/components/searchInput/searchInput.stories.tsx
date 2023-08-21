import type { Meta, StoryObj } from '@storybook/react';

import SearchInput from './searchInput.component';

const meta: Meta<typeof SearchInput> = {
  title: 'Components / Search / Input',
  component: SearchInput,
  args: {
    searchTerm: 'Peaches',
  },
  argTypes: {
    updateSearchTerm: {
      action: 'Update-Search-Term',
    },
  },
};
export default meta;

type Story = StoryObj<typeof SearchInput>;

export const SearchInputStory: Story = {};
