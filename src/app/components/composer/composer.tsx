import React from 'react';

import { Markup } from '~/components/components';

import { ComposerItemProps, ComposerProps } from './composer.types';

/**
 * @summary
 * As of version 15 of Contensis the Composer does NOT provide IDs on Composer fields
 * Therefore you MUST generate keys for each component returned from the following .map()
 * It is RECOMMENDED to use the props data to generate these keys
 * It is NOT RECOMMENDED to use random keys or the .map()'s index
 * See: https://react.dev/learn/rendering-lists#keeping-list-items-in-order-with-key
 * Consider: https://www.npmjs.com/package/uuid-by-string
 */

const Composer = ({ items }: ComposerProps) => {
  if (!items || !Array.isArray(items)) return null;

  return (
    <>
      {items.map((props: ComposerItemProps) => {
        if (!props._type) return null;
        switch (props._type) {
          case 'richText':
            return <Markup {...props} />;

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
