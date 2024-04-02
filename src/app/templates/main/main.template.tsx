import React from 'react';

import Meta, { MetaProps } from '~/components/meta/meta.component';
import Navbar from '~/components/navbar/navbar.component';

type MainTemplateProps = {
  className?: string;
  meta?: MetaProps;
  children: React.ReactNode;
};

const MainTemplate = ({ className, children, meta }: MainTemplateProps) => {
  return (
    <>
      {meta ? <Meta {...meta} /> : null}
      <header>
        <Navbar />
      </header>
      <main id="main" className={className}>
        {children}
      </main>
    </>
  );
};

export default MainTemplate;
