import { calcHeight } from './calcHeight';
import { calcWidth } from './calcWidth';

export const cropImageDimensions = ({
  assetHeight,
  assetWidth,
  height,
  width,
}: {
  assetHeight: number;
  assetWidth: number;
  /** resize height dimension */
  height?: number;
  /** resize width dimension */
  width?: number;
}) => {
  let h = height ? height : calcHeight({ assetHeight, assetWidth, width });
  let w = width ? width : calcWidth({ assetHeight, assetWidth, height });

  // if our original image is smaller than our crop params then use original image dimensions
  if (assetHeight < h && assetWidth < w) {
    h = assetHeight;
    w = assetWidth;
  }

  return {
    height: h,
    width: w,
  };
};
