import { ImageSizes } from '../image.type';
import { updateImageCrop } from './updateImageCrop';

const sortFunction = (a: string, b: string) => {
  if (a === 'default') return 1;
  if (b === 'default') return -1;

  if (a < b) {
    return -1;
  }
  if (a > b) {
    return 1;
  }
  return 0;
};

export const getResponsiveSizes = ({
  height,
  sizes,
  src,
  width,
}: {
  height: number;
  width: number;
  sizes?: ImageSizes;
  src: string;
}) => {
  if (!sizes)
    return {
      srcSet: undefined,
      srcSizes: undefined,
    };

  const aspectRatio = width / height;

  const { srcSet, srcSizes } = Object.keys(sizes)
    .sort(sortFunction)
    .reduce(
      (obj, key) => {
        const w = sizes[key as keyof typeof sizes];
        const h = Math.round(w / aspectRatio);
        const path = updateImageCrop({ height: h, src, width: w });

        return {
          srcSet: [...obj.srcSet, `${path} ${w}w`],
          srcSizes: [
            ...obj.srcSizes,
            key === 'default' ? `${w}px` : `(min-width:${key}px) ${w}px`,
          ],
        };
      },
      {
        srcSet: [] as string[],
        srcSizes: [] as string[],
      }
    );

  return {
    srcSet: srcSet.join(', '),
    srcSizes: srcSizes.join(', '),
  };
};
