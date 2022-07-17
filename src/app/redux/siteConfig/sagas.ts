import { takeEvery, select, put } from 'redux-saga/effects';

import { cachedSearch } from '~/routes/contensisDeliveryAPI';
import { Query, Op } from 'contensis-delivery-api';

import {
  GET_SITE_CONFIG,
  SET_SITE_CONFIG,
  GET_SITE_CONFIG_ERROR,
} from './types';

import { hasSiteConfig } from './selectors';

import { version } from '@zengenti/contensis-react-base/redux';

import { ContentTypes, SiteConfig } from '~/schema';

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
        Op.and(
          Op.equalTo('sys.versionStatus', deliveryApiVersionStatus),
          Op.or(Op.equalTo('sys.contentTypeId', ContentTypes.config))
        )
      );

      query.fields = [...SiteConfig];
      const results: any = yield cachedSearch.search(query, 4);

      const siteConfig =
        results && results.items && results.items.length > 0
          ? results.items[0]
          : null;

      if (siteConfig) {
        yield put({ type: SET_SITE_CONFIG, siteConfig });
      } else {
        yield put({ type: GET_SITE_CONFIG_ERROR });
      }
    }
  } catch (ex: any) {
    yield put({ type: GET_SITE_CONFIG_ERROR, error: ex.toString() });
  }
}
