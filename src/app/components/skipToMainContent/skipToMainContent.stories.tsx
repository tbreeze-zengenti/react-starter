import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { SkipToMainContentProps } from './skipToMainContent.types';
import SkipToMainContent from './skipToMainContent';

export default {
  title: 'Global/Components/SkipToMainContent',
  component: SkipToMainContent,
} as Meta;

const Template: Story<SkipToMainContentProps> = args => (
  <SkipToMainContent {...args} />
);

export const Default = Template.bind({});

Default.args = {
  skipPath: '#main',
};
