import React from 'react';

// Component
import Link from './Link';

export default {
  title: 'Features/Global/Link',
  component: Link,
};

export const Template = args => {
  return <Link {...args} />;
};

Template.args = {
  text: 'Live example link',
  path: '/site-link',
};
