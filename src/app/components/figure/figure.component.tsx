import React from 'react';
import styled, { css } from 'styled-components';

import { ImageProps } from '../image/image.type';
import Image from '../image/image.component';

export type FigureProps = {
  caption?: string;
  image: ImageProps;
};

const Figure = ({ image, caption }: FigureProps) => {
  return (
    <FigureStyled className="figure">
      <Image {...image} className="figure__image" />
      {caption && (
        <figcaption className="figure__caption">{caption}</figcaption>
      )}
    </FigureStyled>
  );
};

const FigureStyled = styled.figure`
  ${() => {
    return css`
      .figure__image {
        width: fit-content;
      }

      .figure__caption {
        margin-block-start: 1em;
      }
    `;
  }}
`;

export default Figure;
