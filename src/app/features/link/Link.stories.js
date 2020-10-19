import React from 'react';
import { storiesOf } from '@storybook/react';

import Link from './Link';

const link = {
  text: 'Live example link',
  path: '/site-link',
};

storiesOf('Features. Global', module).add('Link', () => {
  return <Link text={link.text} path={link.path} />;
});
