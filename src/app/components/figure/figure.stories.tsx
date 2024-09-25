import type { Meta, StoryObj } from '@storybook/react';

import Figure from './figure.component';
import { imageMapper } from '../image/image.mapper';

const meta: Meta<typeof Figure> = {
  title: 'Components / Figure',
  component: Figure,
  args: {
    image: imageMapper({
      image: {
        asset: {
          sys: {
            uri: 'https://placehold.co/600x400',
            // @ts-expect-error
            properties: {
              height: 400,
              width: 640,
            },
          },
        },
        altText: 'A placeholder image',
        caption: 'A short caption',
        transformations: '',
      },
      fit: 'fill',
      height: 400,
      width: 640,
      format: 'webp',
    }),
    caption: 'A short caption',
  },
};

export default meta;

type Story = StoryObj<typeof Figure>;

export const FigureStory: Story = {};
