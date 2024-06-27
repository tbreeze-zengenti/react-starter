import type { MarkupProps } from './markup.component';

export const markupMapper = (props: string): MarkupProps => {
  return {
    text: props,
  };
};
