import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import SearchResult from './searchResult';
import { MemoryRouter } from 'react-router-dom';

const meta: Meta<typeof SearchResult> = {
  title: 'Components / Search / Search Result',
  component: SearchResult,
  args: {
    title: 'New eco friendly pots',
    description: 'Get a free eco-friendly pot with any plant bought this month',
    image: {
      src: 'https://placehold.co/600x500',
      alt: 'New recycled pots',
    },
    link: '/',
    id: '0e79c27b-d1bf-4545-a40d-daa17d8726a4',
  },
};
export default meta;

type Story = StoryObj<typeof SearchResult>;

export const SearchResultStory: Story = {
  render: args => (
    <MemoryRouter>
      <SearchResult {...args} />
    </MemoryRouter>
  ),
};

export const SearchResultItemsStory: Story = {
  render: args => (
    <MemoryRouter>
      <div {...args}>
        <SearchResult {...args} />
        <SearchResult
          {...args}
          title="Register for our new subscription service"
          description="Leif Club, our new subscription service helps you create a house full of beautiful healthy plants"
        />
        <SearchResult
          {...args}
          title="Advice on how to care for your plants"
          description="Advice on choosing the best plants for your lifestyle"
        />
      </div>
    </MemoryRouter>
  ),
};
