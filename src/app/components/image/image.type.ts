export type ImageEffect = {
  blur?: number;
  flip?: 'both' | 'horizontal' | 'vertical';
  grayscale?: boolean;
  rotation?: number;
  background?: string;
};

export type ImageFit =
  | 'contain'
  | 'crop-bottom'
  | 'crop-left'
  | 'crop-right'
  | 'crop-top'
  | 'crop'
  | 'fill'
  | 'stretch';

export type ImageFormat = 'png' | 'jpg' | 'webp';

export type ImageSizes = {
  [key: number]: number;
  default: number;
};

export type ImageProps = {
  alt: string;
  caption?: string;
  className?: string;
  height: number;
  id?: string;
  sizes?: ImageSizes;
  src: string;
  width: number;
};
