import React from 'react';

import { MarkupProps } from './markup.types';
import MarkupStyled from './markup.styled';

const Markup = ({ className, text }: MarkupProps) => {
  return (
    <MarkupStyled
      className={`markup ${className}`}
      dangerouslySetInnerHTML={{
        __html: text,
      }}
    />
  );
};

export default Markup;
