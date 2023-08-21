import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import Link from './link';

const meta: Meta<typeof Link> = {
  title: 'Components / Global / Link',
  component: Link,
  args: {
    className: 'storylink',
    download: false,
    openInNewWindow: false,
    title: 'Link title',
    path: '/hello',
  },
  argTypes: { onClick: { action: 'clicked' } },
};
export default meta;

type Story = StoryObj<typeof Link>;

export const LinkStory: Story = {
  render: args => <Link {...args}>{args.title}</Link>,
};
export const LinkExternalStory: Story = {
  args: {
    path: 'https://bbc.co.uk',
    openInNewWindow: true,
  },
  render: args => <Link {...args}>{args.title}</Link>,
};
