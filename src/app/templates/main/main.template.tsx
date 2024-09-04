import React from 'react';
import Meta, { MetaProps } from '~/components/meta/meta.component';
import SkipToMainContent from '~/components/skipToMainContent/skipToMainContent.component';

type MainTemplateProps = {
  children: React.ReactNode;
  meta?: MetaProps;
  className?: string;
};

const MainTemplate = ({ children, meta, className }: MainTemplateProps) => {
  return (
    <>
      <SkipToMainContent />
      {meta ? <Meta {...meta} /> : null}
      <main id="main" className={className}>
        {children}
      </main>
    </>
  );
};

export default MainTemplate;
