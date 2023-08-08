import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import SkipToMainContent from './skipToMainContent';

const meta: Meta<typeof SkipToMainContent> = {
  title: 'Components / Global /  SkipToMainContent',
  component: SkipToMainContent,
  args: {
    skipPath: '#main',
  },
};

export default meta;
type Story = StoryObj<typeof SkipToMainContent>;

export const SkipToMainContentStory: Story = {
  render: () => (
    <div>
      <SkipToMainContent />
      <h1>Skip to content story</h1>
      <p>
        With mouse click on heading ^ <br /> Now press Tab key.
      </p>
      <br />
      <div id="main" tabIndex={-1}>
        <p>Focus should move to me</p>
      </div>
    </div>
  ),
};
