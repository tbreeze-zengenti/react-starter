import type { Meta, StoryObj } from '@storybook/react';

import Pagination from './pagination.component';

const mockPaginationData = {
  pageCount: 5,
  pageIndex: 0,
};

const meta: Meta<typeof Pagination> = {
  title: 'Components / Pagination',
  component: Pagination,
  args: {
    pageCount: mockPaginationData.pageCount,
    pageIndex: mockPaginationData.pageIndex,
  },
};

export default meta;

type Story = StoryObj<typeof Pagination>;

export const PaginationStory: Story = {};
