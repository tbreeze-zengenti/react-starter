import React from 'react';
import { ContensisForm } from '@contensis/forms';

const Form = ({ formId }: { formId: string }) => {
  const projectId = PROJECT; /* global PROJECT */
  return <ContensisForm projectId={projectId} formId={formId} />;
};

export default Form;
