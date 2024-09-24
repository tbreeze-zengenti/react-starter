/**
 * Calculate the output image width based on the aspect ratio
 * of the original image file and the desired resized image height
 */
export const calcWidth = ({
  assetHeight,
  assetWidth,
  height,
}: {
  /** height of original image file */
  assetHeight: number;
  /** width of original image file */
  assetWidth: number;
  /** new height parameter */
  height?: number;
}) => {
  if (!height) return assetWidth;
  const ratio = assetWidth / assetHeight;
  return Math.round(height * ratio);
};
