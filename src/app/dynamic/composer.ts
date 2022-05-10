import loadable from '@loadable/component';

// Import ComponentProps here
import { MarkupProps } from '~/components/markup/markup.types';

// Export each ComposerComponent using this structure
export const Markup = loadable<MarkupProps>(
  () => import(/* webpackChunkName: "markup" */ '~/components/markup/markup')
);
