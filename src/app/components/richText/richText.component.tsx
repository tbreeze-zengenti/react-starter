import React from 'react';

export type RichTextProps = {
  _type?: 'richText';
  className?: string;
  text: string;
};

/**
 * A component for rendering HTML markup.
 */
const RichText = ({ className, text }: RichTextProps) => {
  return (
    <div
      className={`rich-text ${className ? className : ''}`}
      dangerouslySetInnerHTML={{
        __html: text,
      }}
    />
  );
};

export default RichText;
