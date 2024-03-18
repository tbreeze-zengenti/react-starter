import React from 'react';

import { PageProps, MappedContentPage } from './content.type';
import { Composer } from '~/dynamic/components';

const ContentPage = ({ mappedEntry }: PageProps) => {
  const { title, contentComposerProps } =
    mappedEntry || ({} as MappedContentPage);
  return (
    <div>
      {title && <h1>{title}</h1>}
      <Composer {...contentComposerProps} />
    </div>
  );
};

export default ContentPage;
