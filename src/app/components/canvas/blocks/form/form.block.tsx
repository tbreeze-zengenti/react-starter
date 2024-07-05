import React from 'react';
import {
  FormContentTypeBlock,
  RenderBlockPropsWithChildren,
} from '@contensis/canvas-react';
import Form from '~/components/forms/Form';

const FormBlock = ({
  block,
}: RenderBlockPropsWithChildren<FormContentTypeBlock>) => {
  const formId = block?.value?.contentType?.id;
  return formId ? <Form formId={formId} /> : null;
};

export default FormBlock;
