import React from 'react';

import Meta from '~/components/meta/meta';
import { MetaProps } from '~/components/meta/meta.types';

interface MainTemplateProps {
  className?: string;
  meta: MetaProps;
  children: React.ReactElement;
}

const MainTemplate = ({ className, children, meta }: MainTemplateProps) => {
  return (
    <>
      <Meta {...meta} />
      <main id="main" className={className}>
        {children}
      </main>
    </>
  );
};

export default MainTemplate;