import React from 'react';
import {
  Link as LinkCanvas,
  RenderBlockPropsWithChildren,
  LinkBlock as LinkBlockProps,
} from '@contensis/canvas-react';

import Link, { LinkProps } from '~/components/link/link.component';

/**
 * Renders a link block using the Contensis Canvas React library.
 */
const LinkBlock = (props: RenderBlockPropsWithChildren<LinkBlockProps>) => {
  const { link, newTab } = props.block.properties || {};

  // Bring together relevant component props supplied by the canvas block
  const componentProps: LinkProps = {
    path: link?.sys?.uri,
    openInNewWindow: newTab,
  };

  // props into the common "App Link" component
  return (
    <Link {...componentProps}>
      <LinkCanvas.Children block={props.block} />
    </Link>
  );
};

export default LinkBlock;
