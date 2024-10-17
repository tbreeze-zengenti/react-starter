import { RouteEntry } from '~/util/routeEntry.type';
import { ContentTemplateProps } from './content.template';
import { StrictEntry } from 'contensis-delivery-api';

type ContentTypeContent = StrictEntry & {
  composer: any;
  canvas?: any;
};

export const contentMapper = (
  props: RouteEntry<ContentTypeContent, ContentTypeContent>
): ContentTemplateProps => {
  return {
    meta: {
      pageTitle: props.entryTitle,
    },
    title: props.entryTitle,
    composer: props.composer,
    canvas: props.canvas ? { data: props.canvas } : undefined,
  };
};
