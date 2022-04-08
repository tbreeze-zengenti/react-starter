import React from 'react';

import { PageProps, MappedContentPage } from './content.types';
import { Composer } from '~/dynamic/components';

const ContentPage = ({ mappedEntry }: PageProps) => {
  const { title, contentComposerProps } =
    mappedEntry || ({} as MappedContentPage);
  return (
    <ContentPage>
      {title && <h1>{title}</h1>}
      <Composer {...contentComposerProps} />
    </ContentPage>
  );
};

export default ContentPage;
