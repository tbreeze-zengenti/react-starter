import React from 'react';

interface MainTemplateProps {
  className?: string;
  children: React.ReactElement;
}

const MainTemplate = ({ className, children }: MainTemplateProps) => {
  return (
    <>
      <main id="main" className={className}>
        {children}
      </main>
    </>
  );
};

export default MainTemplate;
