import { MarkupProps } from './markup.types';

export const MarkupMapper = {
  text: '.',
};

export const markupMapper = (props: any): MarkupProps => {
  return {
    text: props,
  };
};
