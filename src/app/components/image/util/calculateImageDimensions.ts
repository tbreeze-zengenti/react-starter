import { cropImageDimensions } from './cropImageDimensions';
import { resizeImageDimensions } from './resizeImageDimensions';

import { ImageFit } from '../image.type';
import { ContensisImage } from '~/types/contensis.type';

export const calculateImageDimensions = ({
  fit,
  height,
  image,
  width,
}: {
  fit: ImageFit;
  height?: number;
  image: ContensisImage;
  width?: number;
}) => {
  // get our image asset width and height
  const assetHeight = image.asset?.sys?.properties?.height || 0;
  const assetWidth = image.asset?.sys?.properties?.width || 0;

  // we need the image properties
  if (assetHeight === 0 || assetWidth === 0) {
    console.error('sys.properties missing from image asset');
  }

  const dimensions = fit.startsWith('crop')
    ? cropImageDimensions({ assetHeight, assetWidth, height, width })
    : resizeImageDimensions({ assetHeight, assetWidth, height, width });

  return dimensions;
};
