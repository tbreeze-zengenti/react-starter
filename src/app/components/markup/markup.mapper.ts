import type { MarkupProps } from './markup.component';

export const MarkupMapper = {
  text: '.',
};

export const markupMapper = (props: string): MarkupProps => {
  return {
    text: props,
  };
};
