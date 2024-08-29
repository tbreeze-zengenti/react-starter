import React from 'react';
import { Markup } from '~/components';
import type { ComposerItemProps, ComposerProps } from './composer.types';

/**
 * @summary
 * Contensis does NOT provide unique IDs for Composer fields
 * Therefore you must generate keys for each component returned from the following .map()
 * It is recommended to use the props data to generate these keys
 * It is not recommended to use random keys
 * @see https://react.dev/learn/rendering-lists#keeping-list-items-in-order-with-key
 * @link https://www.npmjs.com/package/uuid-by-string
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
            console.error('Composer Component ', props._type, ' not found');
            break;
        }
      })}
    </>
  );
};

export default Composer;
