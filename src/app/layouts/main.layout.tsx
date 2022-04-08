import React from 'react';

interface Props {
  className?: string;
  children: React.ReactElement;
}

const MainLayout = ({ className, children }: Props) => {
  return (
    <>
      <main id="main" className={className}>
        {children}
      </main>
    </>
  );
};

export default MainLayout;
