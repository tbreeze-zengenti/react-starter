import { calculateImageDimensions } from './util/calculateImageDimensions';
import { cropImage } from './util/cropImage';

import { ImageEffect, ImageFit, ImageFormat, ImageProps } from './image.type';
import { ContensisImage } from '~/types/contensis.type';
import { getPropsFromTransformations } from './util/getPropsFromTransformations';

export const imageMapper = ({
  effect,
  fit = 'crop',
  format = 'webp',
  height,
  image,
  quality = 80,
  width,
}: {
  effect?: ImageEffect;
  fit?: ImageFit;
  format?: ImageFormat;
  height?: number;
  image: ContensisImage;
  quality?: number;
  width?: number;
}): ImageProps => {
  const alt = image.altText || image.caption || image.asset.title;
  const caption = image.caption;
  const id = image.asset.sys.id;

  if (image.asset.sys.uri.endsWith('svg')) {
    return {
      alt,
      caption,
      height: 0,
      id,
      src: image.asset.sys.uri,
      width: 0,
    };
  }

  if (image.transformations) {
    const { h, w } = getPropsFromTransformations({ image });

    return {
      alt,
      caption,
      height: h ?? image.asset.sys.properties.height,
      id,
      src: image.asset.sys.uri,
      width: w ?? image.asset.sys.properties.width,
    };
  }

  const { height: h, width: w } = calculateImageDimensions({
    fit,
    height,
    image,
    width,
  });

  const src = cropImage({
    effect,
    fit,
    format,
    height: h,
    quality,
    src: image.asset.sys.uri,
    width: w,
  });

  console.log(image);

  return {
    alt,
    caption,
    height: h,
    id,
    src,
    width: w,
  };
};
