import React from 'react';
import { Markup } from '~/components';
import type { ComposerItemProps, ComposerProps } from './composer.types';

/**
 * @summary
 * Contensis does NOT provide unique IDs for Composer fields
 * Therefore you MUST generate keys for each component returned from the following .map()
 * It is RECOMMENDED to use the props data to generate these keys
 * It is NOT RECOMMENDED to use random keys
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
          case 'textBlock':
            return <Markup {...props} />;

          default:
            console.error('Composer Component ', props._type, ' not found');
            break;
        }
      })}
    </>
  );
};

export default Composer;
