import React from 'react';

import { MarkupProps } from './markup.types';
import MarkupStyled from './markup.styled';

const Markup = ({ className, html }: MarkupProps) => {
  return (
    <MarkupStyled
      className={`markup ${className}`}
      dangerouslySetInnerHTML={{
        __html: html
          .replace(
            /<table/g,
            '<div class="text-block__table" tabindex="0"><table'
          )
          .replace(/<\/table>/g, '</table></div>'),
      }}
    />
  );
};

export default Markup;
