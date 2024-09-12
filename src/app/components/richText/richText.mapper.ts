import type { RichTextProps } from './richText.component';

export const richTextMapper = (props: string): RichTextProps => {
  return {
    text: props,
  };
};
