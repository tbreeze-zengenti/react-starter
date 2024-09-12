import type { MarkupProps } from '~/components/richText/markup.component';

export interface ComposerProps {
  items: ComposerItemProps;
}

export type ComposerItemProps = MarkupProps;
