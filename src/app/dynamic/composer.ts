import loadable from '@loadable/component';

import { MarkupProps } from '~/components/markup/markup.types';

export const Markup = loadable<MarkupProps>(
  () => import(/* webpackChunkName: "markup" */ '~/components/markup/markup')
);
