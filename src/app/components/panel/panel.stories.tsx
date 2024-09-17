import type { Meta, StoryObj } from '@storybook/react';
import Panel from './panel.component';

const meta: Meta<typeof Panel> = {
  title: 'Components / Panel',
  component: Panel,
  args: {
    className: '',
    panelType: 'information',
    text: 'Panel content',
  },
};

export default meta;

type Story = StoryObj<typeof Panel>;

export const PanelStory: Story = {};
