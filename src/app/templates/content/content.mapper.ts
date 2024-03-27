import { RouteEntry } from '~/util/routeEntry.type';
import { ContentTemplateProps } from './content.template';

type ContentTypeContent = {
  entryTitle: string;
  bodyContent: any;
};

export const contentMapper = (
  props: RouteEntry<ContentTypeContent>
): ContentTemplateProps => {
  return {
    meta: {
      pageTitle: 'Get started',
    },
    title: props.entryTitle,
    body: props.bodyContent,
  };
};
