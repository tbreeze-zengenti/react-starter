import { takeEvery, select, put } from 'redux-saga/effects';

import { cachedSearch } from '@zengenti/contensis-react-base/util';
import { Query, Op } from 'contensis-delivery-api';

import {
  GET_SITE_CONFIG,
  SET_SITE_CONFIG,
  GET_SITE_CONFIG_ERROR,
} from './types';

import { hasSiteConfig } from './selectors';

import { version } from '@zengenti/contensis-react-base/redux';

import { siteConfigMapper } from './siteConfig.mapper';
import { siteConfigFields } from '~/schema/fields.schema';
import { contentTypes } from '~/schema/contentTypes.schema';

export const SiteConfigSagas = [
  takeEvery(GET_SITE_CONFIG, ensureSiteConfigSaga),
];

/**
 * Saga to ensure site configuration is available in the Redux store.
 */
export function* ensureSiteConfigSaga(): any {
  // Select the current Redux state
  const state = yield select();

  try {
    // Check if site config does not already exists in the state
    if (!hasSiteConfig(state)) {
      // Select the version status from the Redux state
      const deliveryApiVersionStatus = yield select(
        version.selectors.selectVersionStatus
      );

      // Define query to fetch site config
      const query = new Query(
        Op.equalTo('sys.versionStatus', deliveryApiVersionStatus),
        Op.or(Op.equalTo('sys.contentTypeId', contentTypes.config))
      );

      // Set fields for the query for better performance
      query.fields = [...siteConfigFields];

      // Ensure siteConfigFields are defined and not empty
      if (!siteConfigFields || siteConfigFields.length <= 0) return;

      // Execute the search query
      const results = yield cachedSearch.search(query, 1);

      // Map the retrieved site config
      const config = results?.items?.[0]
        ? siteConfigMapper(results.items[0])
        : null;

      // Dispatch action to set site config in the Redux store
      if (config) {
        yield put({ type: SET_SITE_CONFIG, config });
      } else {
        yield put({ type: GET_SITE_CONFIG_ERROR });
      }
    }
    // Dispatch action if an error occurs during site config fetching
  } catch (error: any | unknown) {
    yield put({ type: GET_SITE_CONFIG_ERROR, error: error.toString() });
  }
}
