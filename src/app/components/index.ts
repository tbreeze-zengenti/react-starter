import loadable from '@loadable/component';
import { ComposerProps } from './composer/composer.types';
import { CanvasProps } from '~/components/canvas/canvas.component';
import { MarkupProps } from '~/components/markup/markup.component';

export const Composer = loadable<ComposerProps>(
  () =>
    import(
      /* webpackChunkName: "composer" */ '~/components/composer/composer.component'
    )
);

export const Canvas = loadable<CanvasProps>(
  () =>
    import(
      /* webpackChunkName: "canvas" */ '~/components/canvas/canvas.component'
    )
);

export const Markup = loadable<MarkupProps>(
  () =>
    import(
      /* webpackChunkName: "markup" */ '~/components/markup/markup.component'
    )
);
