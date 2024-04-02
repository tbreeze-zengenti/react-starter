import { RouteEntry } from '~/util/routeEntry.type';
import { ContentTemplateProps } from './content.template';

type ContentTypeContent = {
  entryTitle: string;
  composer: any;
  canvas?: any;
};

export const contentMapper = (
  props: RouteEntry<ContentTypeContent>
): ContentTemplateProps => {
  return {
    meta: {
      pageTitle: 'Get started',
    },
    title: props.entryTitle,
    composer: props.composer,
    canvas: props.canvas ? { data: props.canvas } : undefined,
  };
};
