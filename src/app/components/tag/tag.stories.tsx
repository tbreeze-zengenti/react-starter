import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

// Utils
import { useGetEntryByEntryId } from '@zengenti/contensis-entry-picker-storybook-addon';

// Component
import Tag from './tag';

export default {
  title: 'Global/Components/Tag',
  component: Tag,
} as ComponentMeta<typeof Tag>;

export const Template: ComponentStory<typeof Tag> = (
  args,
  { globals: { entryId } }
) => {
  const entry = useGetEntryByEntryId(entryId);
  return <Tag {...{ ...args, ...entry }} />;
};

Template.args = {
  contentTypes: ['plantType'],
  entryTitle: 'Plant type',
};
