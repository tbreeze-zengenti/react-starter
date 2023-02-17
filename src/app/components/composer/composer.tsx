import React from 'react';
import { v4 as id } from 'uuid';

import { Markup } from '~/dynamic/composer';

import { ComposerItemProps, ComposerProps } from './composer.types';

const Composer = ({ items }: ComposerProps) => {
  if (!items || !Array.isArray(items)) return null;

  return (
    <>
      {items.map((props: ComposerItemProps) => {
        if (!props._type) return null;
        switch (props._type) {
          case 'richText':
            return <Markup key={id()} {...props} />;

          default:
            console.error(
              'Composer Component ',
              (props as any)._type,
              ' not found'
            );
            break;
        }
      })}
    </>
  );
};

export default Composer;
