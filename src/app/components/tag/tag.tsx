import React from 'react';

interface TagProps {
  readonly contentTypes: string[];
  entryTitle: string;
}

const Tag = ({ entryTitle }: TagProps) => {
  return <span>{entryTitle}</span>;
};

export default Tag;
