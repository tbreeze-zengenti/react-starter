import { ContensisBlockquote } from '~/types/contensis.type';
import { BlockquoteProps } from './blockquote.component';

export const blockquoteMapper = (
  component: ContensisBlockquote
): BlockquoteProps => {
  return {
    quote: component.text,
    source: component.source,
  };
};
