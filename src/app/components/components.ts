import loadable from '@loadable/component';

import { MarkupProps } from '~/components/markup/markup.types';

export const Composer = loadable(
  () =>
    import(/* webpackChunkName: "composer" */ '~/components/composer/composer')
);

export const Markup = loadable<MarkupProps>(
  () => import(/* webpackChunkName: "markup" */ '~/components/markup/markup')
);
