import React from 'react';

export type MarkupProps = {
  _type?: 'textBlock';
  className?: string;
  text: string;
};

/**
 * A component for rendering HTML markup.
 */
const Markup = ({ className, text }: MarkupProps) => {
  return (
    <div
      className={`markup ${className ? className : ''}`}
      dangerouslySetInnerHTML={{
        __html: text,
      }}
    />
  );
};

export default Markup;
