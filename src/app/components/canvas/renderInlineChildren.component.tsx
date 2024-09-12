import React, { useContext } from 'react';
import { Block, BlockRenderer, RendererContext } from '@contensis/canvas-react';

type RenderInlineChildrenProps = {
  value?: Block[] | string;
};

const RenderInlineChildren = ({ value }: RenderInlineChildrenProps) => {
  const { blocks } = useContext(RendererContext);

  return (
    <>
      {Array.isArray(value) ? (
        value
          .map(child => {
            const Component = blocks
              ? (blocks[child.type] as BlockRenderer<any>)
              : null;

            return Component ? (
              <Component key={child.id} {...{ block: child }} />
            ) : null;
          })
          .filter(x => x)
      ) : typeof value === 'string' ? (
        <>{value}</>
      ) : null}
    </>
  );
};

export default RenderInlineChildren;
