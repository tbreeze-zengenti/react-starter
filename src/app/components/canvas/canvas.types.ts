import {
  Block,
  FragmentBlock,
  DecoratorType,
  ComponentBlock,
} from '@contensis/canvas-react';

type Attributes = Record<string, any>;
type WithChildren = React.ReactNode;
type RenderBlockPropsWithChildren<T extends Block> = RenderBlockProps<T> &
  WithChildren &
  Attributes;

export type RenderComponentProps = RenderBlockPropsWithChildren<ComponentBlock>;

export type RenderBlockProps<T extends Block> = { block: Partial<T> };

export type RenderDecoratorProps = {
  block: FragmentBlock;
  decorator: undefined | DecoratorType;
  otherDecorators: undefined | DecoratorType[];
};
