import { RouteEntry } from '~/util/routeEntry.type';
import { ContentPageProps } from './content.template';

type ContentTypeContent = {
  entryTitle: string;
  bodyContent: any;
};

export const contentMapper = (
  props: RouteEntry<ContentTypeContent>
): ContentPageProps => {
  return {
    meta: {
      pageTitle: 'Get started',
    },
    title: props.entryTitle,
    body: props.bodyContent,
  };
};
