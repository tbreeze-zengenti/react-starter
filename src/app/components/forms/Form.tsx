import React from 'react';
import { ContensisForm } from '@contensis/forms';

const Form = ({ formId }: { formId: string }) => {
  const projectId = PROJECT; /* global PROJECT */
  const apiUrl = SERVERS.cms; /* global SERVERS */
  return (
    <>
      <ContensisForm apiUrl={apiUrl} projectId={projectId} formId={formId} />
    </>
  );
};

export default Form;
