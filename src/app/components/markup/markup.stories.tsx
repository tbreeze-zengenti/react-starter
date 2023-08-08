import type { Meta, StoryObj } from '@storybook/react';

import Markup from './markup';

const meta: Meta<typeof Markup> = {
  title: 'Components / Global / Markup',
  component: Markup,
  args: {
    className: 'markup',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas?',
  },
};

export default meta;
type Story = StoryObj<typeof Markup>;

export const MarkupStory: Story = {};
