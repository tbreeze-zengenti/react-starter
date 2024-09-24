/**
 * Calculate the output image height based on the aspect ratio
 * of the original image file and the desired resized image width
 */
export const calcHeight = ({
  assetHeight,
  assetWidth,
  width,
}: {
  /** height of original image file */
  assetHeight: number;
  /** width of original image file */
  assetWidth: number;
  /** new width parameter */
  width?: number;
}) => {
  if (!width) return assetHeight;
  const ratio = assetWidth / assetHeight;
  return Math.round(width / ratio);
};
