import loadable from '@loadable/component';
import { RenderDecoratorProps } from '~/components/canvas/canvas.types';

// Blocks
// export const Table = loadable<RenderBlockProps<TableBlock>>(
//   () =>
//     import(
//       /* webpackChunkName: "table.component" */ '~/components/canvas/blocks/table'
//     )
// );

// Components
// export const Sample = loadable<RenderComponentProps>(
//   () =>
//     import(
//       /* webpackChunkName: "sample.component" */ '~/components/canvas/components/sample'
//     )
// );

// Decorators
export const Strong = loadable<RenderDecoratorProps>(
  () =>
    import(
      /* webpackChunkName: "strong.component" */ '~/components/canvas/decorators/strong'
    )
);
