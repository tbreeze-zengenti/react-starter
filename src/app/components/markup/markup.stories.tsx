import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import Markup from './markup';
import { MarkupProps } from './markup.types';

export default {
  title: 'Global/Components/Markup',
  component: Markup,
} as Meta;

const Template: Story<MarkupProps> = args => <Markup {...args} />;

export const Default = Template.bind({});

Default.args = {
  className: 'markup',
  html: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas?',
};
