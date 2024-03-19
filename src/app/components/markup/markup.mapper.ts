import { MarkupProps } from './markup';

export const MarkupMapper = {
  text: '.',
};

export const markupMapper = (props: any): MarkupProps => {
  return {
    text: props,
  };
};
