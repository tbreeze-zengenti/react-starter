import React from 'react';
import { ImageBlock } from '@contensis/canvas-react';

import Figure from '~/components/figure/figure.component';
import { ContensisImage } from '~/types/contensis.type';
import { imageMapper } from '~/components/image/image.mapper';

const FigureCanvas = ({ block }: { block: ImageBlock }) => {
  /** @todo Handle transformations */
  const image =
    block.value && block.value.asset
      ? imageMapper({
          image: block.value as ContensisImage,
        })
      : null;

  return image ? <Figure {...{ image, caption: image.caption }} /> : null;
};

export default FigureCanvas;
