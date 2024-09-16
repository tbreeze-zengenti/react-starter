import type { Meta, StoryObj } from '@storybook/react';
import Button from './button.component';

const meta: Meta<typeof Button> = {
  title: 'Components / Button',
  component: Button,
  args: {
    buttonTheme: 'primary',
    children: 'Click me',
    className: '',
    link: '/',
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const ButtonStory: Story = {};
