import React from 'react';
import {
  FormContentTypeBlock,
  RenderBlockPropsWithChildren,
} from '@contensis/canvas-react';

import { Form } from '~/components';

/**
 * Renders a Contensis Form using the Contensis Canvas React library.
 */
const FormBlock = ({
  block,
}: RenderBlockPropsWithChildren<FormContentTypeBlock>) => {
  const formId = block?.value?.contentType?.id;
  return formId ? <Form formId={formId} /> : null;
};

export default FormBlock;
