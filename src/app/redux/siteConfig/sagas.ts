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

import { SiteConfigFields } from '~/schema';

import { SiteConfigMapper } from './siteConfig.mapper';

export const SiteConfigSagas = [
  takeEvery(GET_SITE_CONFIG, ensureSiteConfigSaga),
];

export function* ensureSiteConfigSaga(): any {
  const state = yield select();
  try {
    if (!hasSiteConfig(state)) {
      const deliveryApiVersionStatus = yield select(
        version.selectors.selectVersionStatus
      );

      const query = new Query(
        Op.equalTo('sys.versionStatus', deliveryApiVersionStatus),
        Op.or(Op.equalTo('sys.contentTypeId', 'news'))
      );

      /**
       * Fields must be defined to help improve query performance
       * If `SiteConfigFields` is NOT populated the query will not execute
       */
      query.fields = [...SiteConfigFields];

      if (!SiteConfigFields || SiteConfigFields.length <= 0) return;

      const results = yield cachedSearch.search(query, 1);

      const config = results?.items?.[0]
        ? SiteConfigMapper(results.items[0])
        : null;

      if (config) {
        yield put({ type: SET_SITE_CONFIG, config });
      } else {
        yield put({ type: GET_SITE_CONFIG_ERROR });
      }
    }
  } catch (error: any | unknown) {
    yield put({ type: GET_SITE_CONFIG_ERROR, error: error.toString() });
  }
}
