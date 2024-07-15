import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { UniversalClient } from 'contensis-management-api';
import { ContentType, VersionStatus } from 'contensis-core-api';
import { selectors } from '@zengenti/contensis-react-base/routing';

import MainLayout from '~/layouts/main.layout';
import { Loading } from '~/routes/Loading';

import FormSelectorStyled from './FormSelector.styled';

import Form from '~/components/forms/Form';
import Meta from '~/components/meta/meta';

// Management API is here for testing, not for production use
const client = new UniversalClient({
  rootUrl: SERVERS.cms,
  projectId: PROJECT,
  clientType: 'client_credentials',
  clientDetails: {
    clientId: CLIENT_ID,
    clientSecret: SHARED_SECRET,
  },
  // Fix: `ContensisApplicationError: Failed to execute 'fetch' on 'Window': Illegal invocation`
  fetchFn:
    typeof window === 'undefined'
      ? undefined
      : (...args) => window.fetch(...args),
});

const FormSelector = () => {
  const staticRoute = useSelector(selectors.selectStaticRoute);

  const [formContentTypes, setFormContentTypes] = useState<ContentType[]>([
    { id: 'contactForm' } as ContentType,
  ]);

  const [selectedFormId, setSelectedFormId] = useState(
    staticRoute?.match.params.formId || 'contactForm'
  );
  const selectedForm = formContentTypes.find(f => f.id === selectedFormId);

  const [selectedLanguage, setSelectedLanguage] = useState('default');

  const [selectedVersion, setSelectedVersion] =
    useState<VersionStatus>('published');

  useEffect(() => {
    // Fetch a list of form content types from the management api
    client.contentTypes.list().then(list => {
      setFormContentTypes(list.filter(ct => ct.dataFormat === 'form'));
    });
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
            value={selectedFormId}
            onChange={e => setSelectedFormId(e.target.value)}
          >
            {formContentTypes.map(contentType => (
              <option key={contentType.id} value={contentType.id}>
                {contentType.name?.[contentType.defaultLanguage || 'en-GB']}
              </option>
            ))}
            <option key="xxInvalidForm" value="~invalid-form~">
              ~ An invalid form ~
            </option>
          </select>
        </label>
        <br />
        <label>
          Language:
          <select
            title="Choose the language variaton of the form to render"
            value={selectedLanguage}
            onChange={e => setSelectedLanguage(e.target.value as VersionStatus)}
          >
            <option key="blank" value=""></option>
            <option key="default" value="default">
              default
            </option>
            {selectedForm?.supportedLanguages
              ? selectedForm.supportedLanguages.map(v => (
                  <option key={v} value={v}>
                    {v}
                  </option>
                ))
              : null}
          </select>
        </label>
        <br />
        <label>
          Version:
          <select
            title="Choose the version of the form to render"
            value={selectedVersion}
            onChange={e => setSelectedVersion(e.target.value as VersionStatus)}
          >
            {['published', 'latest'].map(v => (
              <option key={v} value={v}>
                {v}
              </option>
            ))}
          </select>
        </label>
        <hr />
        <Form
          formId={selectedFormId}
          language={
            selectedLanguage === 'default'
              ? selectedForm?.defaultLanguage || selectedLanguage
              : selectedLanguage
          }
          versionStatus={selectedVersion}
          onPopulate={defaultValue => {
            if ('emailAddress' in defaultValue) {
              defaultValue.emailAddress = '@zengenti.com';
            }
            return defaultValue;
          }}
          onLoadError={error => {
            console.error(error);
          }}
          onSubmit={response => {
            console.info(response);
            return response;
          }}
          onSubmitSuccess={response => {
            console.info(response);
            return true;
          }}
          onSubmitError={error => {
            console.error(error);
            return true;
          }}
          loading={<Loading />}
          error={
            selectedFormId !== '~invalid-form~'
              ? undefined
              : e => (
                  <>
                    <h2>Custom error component</h2>
                    <p>{e.message}</p>
                    <pre>{JSON.stringify(e, null, 2)}</pre>
                  </>
                )
          }
        />
      </FormSelectorStyled>
    </MainLayout>
  );
};

export default FormSelector;
