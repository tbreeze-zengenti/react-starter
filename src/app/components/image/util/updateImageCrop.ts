/**
 * Update image api parameters to resize/crop an image
 */
export const updateImageCrop = ({
  height,
  src,
  width,
}: {
  /** height in pixels */
  height?: number;
  /** image src */
  src: string;
  /** width in pixels */
  width?: number;
}) => {
  if (width) src = src.replace(/(w|width)=[0-9]*/, 'w=' + width.toString());
  if (height) src = src.replace(/(h|height)=[0-9]*/, 'h=' + height.toString());

  return src;
};
