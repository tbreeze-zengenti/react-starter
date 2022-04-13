import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import SkipToMainContent from './skipToMainContent';

export default {
  title: 'Global/Components/SkipToMainContent',
  component: SkipToMainContent,
} as Meta;

const Template: Story = args => <SkipToMainContent {...args} />;

export const Default = Template.bind({});

Default.args = {};
