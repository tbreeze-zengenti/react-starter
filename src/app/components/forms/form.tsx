import React from 'react';
import { ContensisForm, FormProps } from '@contensis/forms';

interface IFormComponentProps extends Partial<FormProps> {
  formId: string;
}

const Form = ({ formId, projectId, ...rest }: IFormComponentProps) => {
  if (!formId) return null;

  return (
    <ContensisForm
      projectId={projectId || PROJECT /* global PROJECT */}
      formId={formId}
      {...rest}
    />
  );
};

export default Form;
