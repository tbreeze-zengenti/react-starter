import React from 'react';

import { getResponsiveSizes } from './util/getResponsiveSizes';
import { ImageProps } from './image.type';

/**
 * @example ```
 *  <Image
 *    alt={'alt'}
 *    height={500}
 *    width={1000}
 *    sizes={{1920: 1000, 1024: 500, default: 250 }}
 *    src={'path-to-image.jpg'}
 *  />
 * ```
 */
const Image = ({
  alt,
  className,
  height,
  id,
  sizes,
  src,
  width,
}: ImageProps) => {
  const { srcSizes, srcSet } = getResponsiveSizes({
    height,
    sizes,
    src,
    width,
  });

  return (
    <img
      className={className}
      id={id}
      loading="lazy"
      sizes={srcSizes}
      srcSet={srcSet}
      {...{ alt, height, src, width }}
    />
  );
};

export default Image;
