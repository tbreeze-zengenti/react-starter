import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import Link from '~/components/link/link.component';
import { MemoryRouter } from 'react-router-dom';

const meta: Meta<typeof Link> = {
  title: 'Components / Global / Link',
  component: Link,
  args: {
    className: 'storylink',
    download: '',
    openInNewWindow: false,
    title: 'Link title',
    path: '/hello',
  },
  argTypes: { onClick: { action: 'clicked' } },
};
export default meta;

type Story = StoryObj<typeof Link>;

export const LinkStory: Story = {
  render: args => (
    <MemoryRouter>
      <Link {...args}>{args.title}</Link>
    </MemoryRouter>
  ),
};
export const LinkExternalStory: Story = {
  args: {
    path: 'https://bbc.co.uk',
    openInNewWindow: true,
  },
  render: args => (
    <MemoryRouter>
      <Link {...args}>{args.title}</Link>
    </MemoryRouter>
  ),
};
