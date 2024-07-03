import React from 'react';
import { useSelector } from 'react-redux';

import MainLayout from '~/layouts/main.layout';

import FormSelectorStyled from './FormSelector.styled';

import Form from '~/components/forms/Form';
import Meta from '~/components/meta/meta';
import { selectors } from '@zengenti/contensis-react-base/routing';

const FormSelector = () => {
  const staticRoute = useSelector(selectors.selectStaticRoute);
  const formId = staticRoute?.match.params.formId || 'contactForm';
  return (
    <MainLayout>
      <FormSelectorStyled className="flow">
        <Meta pageTitle="Form testing page" />
        <h1>Form testing</h1>
        <Form formId={formId} />
      </FormSelectorStyled>
    </MainLayout>
  );
};

export default FormSelector;
