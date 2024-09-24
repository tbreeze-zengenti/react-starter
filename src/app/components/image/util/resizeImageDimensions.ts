export const resizeImageDimensions = ({
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
  const aspectRatio = assetWidth / assetHeight;

  let h = assetHeight;
  let w = assetWidth;

  // If asset width > resize width then shrink
  if (width && w > width) {
    h = Math.round(width / aspectRatio);
    w = width;
  }
  // If asset height (or newly resized 'h') > resize height then shrink
  if (height && h > height) {
    h = height;
    w = Math.round(height * aspectRatio);
  }

  return {
    height: h,
    width: w,
  };
};
