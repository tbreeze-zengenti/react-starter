import { RouteEntry } from '~/util/routeEntry.type';
import { ContentTemplateProps } from './content.template';
import { ContensisImage } from '~/types/contensis.type';
import { imageMapper } from '~/components/image/image.mapper';

type ContentTypeContent = {
  entryTitle: string;
  composer: any;
  canvas?: any;
  image: ContensisImage;
};

export const contentMapper = (
  props: RouteEntry<ContentTypeContent>
): ContentTemplateProps => {
  return {
    meta: {
      pageTitle: props.entryTitle,
    },
    title: props.entryTitle,
    composer: props.composer,
    canvas: props.canvas ? { data: props.canvas } : undefined,
    sampleImage: imageMapper({ image: props.image }),
  };
};
