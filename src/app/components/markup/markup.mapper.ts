import type { MarkupProps } from './markup.component';

export const MarkupMapper = {
  text: '.',
};

export const markupMapper = (props: any): MarkupProps => {
  return {
    text: props,
  };
};
