import React from 'react';
import { PageArticleProps, MappedArticlePage } from './article.type';
import { Canvas } from '~/dynamic/components';

const ArticlePage = ({ mappedEntry }: PageArticleProps) => {
  const { title, canvas } = mappedEntry || ({} as MappedArticlePage);
  return (
    <div>
      {title && <h1>{title}</h1>}
      <div>
        <Canvas data={canvas} />
      </div>
    </div>
  );
};

export default ArticlePage;
