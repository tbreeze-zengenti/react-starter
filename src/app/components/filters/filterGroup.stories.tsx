import type { Meta, StoryObj } from '@storybook/react';

import FilterGroup from './filterGroup.component';
import { Filter } from '@zengenti/contensis-react-base/models/search';

const mockSingleSelect: Record<string, Filter> = {
  group: {
    title: 'Group Legend',
    isSingleSelect: true,
    renderable: true,
    isError: false,
    isLoading: false,
    items: [
      {
        title: 'Item #1',
        key: '1',
        isSelected: false,
      },
      {
        title: 'Item #2',
        key: '2',
        isSelected: false,
      },
      {
        title: 'Item #3',
        key: '3',
        isSelected: false,
      },
      {
        title: 'Item #4',
        key: '4',
        isSelected: false,
      },
      {
        title: 'Item #5',
        key: '5',
        isSelected: false,
      },
    ],
  },
};

const mockMultiSelect: Record<string, Filter> = {
  group: {
    title: 'Group Legend',
    isSingleSelect: false,
    renderable: true,
    isError: false,
    isLoading: false,
    items: [
      {
        title: 'Item #1',
        key: '1',
        isSelected: true,
      },
      {
        title: 'Item #2',
        key: '2',
        isSelected: false,
      },
      {
        title: 'Item #3',
        key: '3',
        isSelected: false,
      },
      {
        title: 'Item #4',
        key: '4',
        isSelected: false,
      },
      {
        title: 'Item #5',
        key: '5',
        isSelected: false,
      },
    ],
  },
};

const meta: Meta<typeof FilterGroup> = {
  title: 'Components / Filter Group',
  component: FilterGroup,
  args: {
    title: mockMultiSelect.group.title,
    filters: mockMultiSelect,
  },
};

export default meta;

type Story = StoryObj<typeof FilterGroup>;

export const MultiSelectFilterStory: Story = {};
export const SingleSelectFilterStory: Story = {
  args: {
    filters: mockSingleSelect,
  },
};
