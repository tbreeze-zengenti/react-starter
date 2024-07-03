import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Client } from 'contensis-management-api';
import { ContentType } from 'contensis-core-api';

import MainLayout from '~/layouts/main.layout';

import FormSelectorStyled from './FormSelector.styled';

import Form from '~/components/forms/Form';
import Meta from '~/components/meta/meta';
import { selectors } from '@zengenti/contensis-react-base/routing';

// Management API is here for testing, not for production use
const client = new Client({
  rootUrl: SERVERS.cms,
  projectId: PROJECT,
  clientType: 'client_credentials',
  clientDetails: {
    clientId: CLIENT_ID,
    clientSecret: SHARED_SECRET,
  },
});

const FormSelector = () => {
  const staticRoute = useSelector(selectors.selectStaticRoute);

  const [contentTypes, setContentTypes] = useState<ContentType[]>([]);
  const [selectedForm, setSelectedForm] = useState(
    staticRoute?.match.params.formId || 'contactForm'
  );
  useEffect(() => {
    client.contentTypes
      .list()
      .then(list =>
        setContentTypes(list.filter(ct => ct.dataFormat === 'form'))
      );
  }, []);
  return (
    <MainLayout>
      <FormSelectorStyled className="flow">
        <Meta pageTitle="Form testing page" />
        <h1>Form testing</h1>{' '}
        <label>
          Pick a form:
          <select
            title="Select a form from the list"
            value={selectedForm}
            onChange={e => setSelectedForm(e.target.value)}
          >
            {contentTypes.map(contentType => (
              <option key={contentType.id} value={contentType.id}>
                {contentType.name[contentType.defaultLanguage || 'en-GB']}
              </option>
            ))}
          </select>
        </label>
        <hr />
        <Form formId={selectedForm} />
      </FormSelectorStyled>
    </MainLayout>
  );
};

export default FormSelector;
