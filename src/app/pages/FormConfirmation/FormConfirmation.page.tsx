import React from 'react';

import MainLayout from '~/layouts/main.layout';

import FormConfirmationStyled from './FormConfirmation.styled';

import {
  FormConfirmationProps,
  MappedFormConfirmationEntry,
} from './FormConfirmation.type';

import Meta from '~/components/meta/meta';
import { Canvas } from '~/dynamic/components';

const FormConfirmation = ({ mappedEntry }: FormConfirmationProps) => {
  const { title, canvas } = mappedEntry || ({} as MappedFormConfirmationEntry);
  return (
    <MainLayout>
      <FormConfirmationStyled className="flow">
        <Meta pageTitle="Form Confirmation" />
        <h1>{title}</h1>
        <Canvas data={canvas} />
      </FormConfirmationStyled>
    </MainLayout>
  );
};

export default FormConfirmation;
