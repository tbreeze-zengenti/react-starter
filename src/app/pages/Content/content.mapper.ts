import { mapComposer } from '@zengenti/contensis-react-base/util';

import { composerPropsMapping } from '~/components/composer/composer.mapper';

export const pageMapping = {
  title: 'entryTitle',
  contentComposerProps: {
    items: ({ content }: any) => mapComposer(content, composerPropsMapping),
  },
};
