import React from 'react';
import { Helmet } from 'react-helmet';
import { useSelector } from 'react-redux';
import { routing } from '@zengenti/contensis-react-base/redux';
import { AppState } from '@zengenti/contensis-react-base/models/redux/appstate';

/**
 * Enables "Deep Linking" when connecting your project to Insytful
 * @see https://www.insytful.com/features/cms-deeplinking
 */
export const DeepLinkMeta = () => {
  const projectId = useSelector<AppState, string>(
    routing.selectors.selectCurrentProject
  );
  const entryId = useSelector<AppState, string>(
    routing.selectors.selectRouteEntryEntryId
  );

  return projectId && entryId ? (
    <Helmet>
      <meta name="IDL:ProjectId" content={projectId} />
      <meta name="IDL:EntryId" content={entryId} />
    </Helmet>
  ) : null;
};
