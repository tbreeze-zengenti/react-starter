import React from 'react';
import { v4 as id } from 'uuid';

// Import your Components from /dynamic/composer in this import
import { Markup } from '~/dynamic/composer';

import { ComposerItemProps, ComposerProps } from './composer.types';

const Composer = ({ items }: ComposerProps) => {
  if (!items || !Array.isArray(items)) return null;

  return (
    <>
      {items.map((props: ComposerItemProps) => {
        if (!props._type) return null;

        // We check if the _type matches
        // _type should exist in your Components props
        // _type should also exist/match your schema ComposerComponents
        // _type is a reference to the CMS field
        if (props._type === 'textArea') {
          return <Markup key={id()} {...props} />;
        } else {
          console.error(
            'Composer Component ',
            (props as any)._type,
            ' not found'
          );
        }
      })}
    </>
  );
};

export default Composer;
