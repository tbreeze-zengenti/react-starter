import { ImageEffect, ImageFit, ImageFormat } from '../image.type';

export const cropImage = ({
  crop,
  effect = {},
  fit,
  format,
  height,
  quality,
  src,
  width,
}: {
  crop?: string;
  effect?: ImageEffect;
  fit?: ImageFit;
  format?: ImageFormat;
  height?: number;
  quality?: number;
  src: string;
  width?: number;
}) => {
  const parameters = {
    h: height,
    w: width,
    crop,
    fit,
    ...effect,
    q: quality,
    f: format,
  };

  return (
    src.split('?')[0] +
    '?' +
    Object.keys(parameters)
      .filter(key => parameters[key as keyof typeof parameters])
      .map(key => `${key}=${parameters[key as keyof typeof parameters]}`)
      .join('&')
  );
};
