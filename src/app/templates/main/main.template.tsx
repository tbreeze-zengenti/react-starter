import React from 'react';

import Meta, { MetaProps } from '~/components/meta/meta.component';

type MainTemplateProps = {
  className?: string;
  meta?: MetaProps;
  children: React.ReactNode;
};

const MainTemplate = ({ className, children, meta }: MainTemplateProps) => {
  return (
    <>
      {meta ? <Meta {...meta} /> : null}
      <main id="main" className={className}>
        {children}
      </main>
    </>
  );
};

export default MainTemplate;
