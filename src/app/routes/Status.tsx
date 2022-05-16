import React from 'react';
import { useHttpContext } from '@zengenti/contensis-react-base/routing';

interface IProps {
  code: number;
}

export const Status = ({ code, children }: React.PropsWithChildren<IProps>) => {
  const httpContext = useHttpContext();
  if (httpContext) {
    httpContext.statusCode = code;
  }
  return <>{children}</>;
};
