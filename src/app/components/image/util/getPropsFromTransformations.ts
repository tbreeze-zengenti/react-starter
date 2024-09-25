import { ContensisImage } from '~/types/contensis.type';

type Transformations = {
  w?: number;
  h?: number;
  crop?: {
    w: number;
    h: number;
    x: number;
    y: number;
  };
};

export const getPropsFromTransformations = ({
  image,
}: {
  image: ContensisImage;
}) => {
  const { w, h }: Transformations =
    image.transformations?.split('&').reduce((t, parameter) => {
      const [key, value] = parameter.split('=');
      if (key === 'crop') {
        const [w, h, x, y] = value.split(',').map(s => parseInt(s));
        return {
          ...t,
          [key]: {
            w,
            h,
            x,
            y,
          },
        };
      } else {
        return { ...t, [key]: value };
      }
    }, {}) || {};

  return {
    w,
    h,
  };
};
