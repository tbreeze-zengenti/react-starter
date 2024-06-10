import { takeEvery, select, put } from 'redux-saga/effects';
import { cachedSearch } from '@zengenti/contensis-react-base/util';
import { Query, Op } from 'contensis-delivery-api';
import {
  GET_SITE_CONFIG,
  SET_SITE_CONFIG,
  GET_SITE_CONFIG_ERROR,
} from './types';
import { selectSiteConfigReady } from './selectors';
import { version } from '@zengenti/contensis-react-base/redux';
import { siteConfigMapper } from './siteConfig.mapper';
import { siteConfigFields } from '~/schema/fields.schema';
import { contentTypes } from '~/schema/contentTypes.schema';

export const SiteConfigSagas = [takeEvery(GET_SITE_CONFIG, getSiteConfigSaga)];

/**
 * Saga to fetch then map site config entry into the redux store
 */
function* getSiteConfigSaga(): Generator<any, void, any> {
  // Check if site config does not already exist in the state
  const isSiteConfigLoaded = yield select(selectSiteConfigReady);

  try {
    if (!isSiteConfigLoaded) {
      // Select the version status from the Redux state
      const deliveryApiVersionStatus = yield select(
        version.selectors.selectVersionStatus
      );

      // Define query to fetch site config entry
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

      // Map the retrieved site config entry
      const mappedEntry = results?.items?.[0]
        ? siteConfigMapper(results.items[0])
        : null;

      // Dispatch action to set site config in the Redux store
      if (mappedEntry) {
        yield put({ type: SET_SITE_CONFIG, mappedEntry });
      } else {
        yield put({ type: GET_SITE_CONFIG_ERROR });
      }
    }
    // Dispatch action if an error occurs during site config fetching
  } catch (error: any) {
    yield put({ type: GET_SITE_CONFIG_ERROR, error: error.toString() });
  }
}
