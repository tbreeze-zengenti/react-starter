import { takeEvery, select, put } from 'redux-saga/effects';

import { SSRContext } from '@zengenti/contensis-react-base';
import { version } from '@zengenti/contensis-react-base/redux';
import { Query, Op } from 'contensis-delivery-api';

import {
  GET_SITE_CONFIG,
  SET_SITE_CONFIG,
  GET_SITE_CONFIG_ERROR,
} from './types';

import { hasSiteConfig } from './selectors';

import { ContentTypes, SiteConfigFields } from '~/schema';

type Action<Payload> = { type: string } & Payload;

export const SiteConfigSagas = [
  takeEvery<Action<SSRContext>>(GET_SITE_CONFIG, ensureSiteConfigSaga),
];

export function* ensureSiteConfigSaga({ api }: SSRContext): any {
  const state = yield select();
  try {
    if (!hasSiteConfig(state)) {
      const deliveryApiVersionStatus = yield select(
        version.selectors.selectVersionStatus
      );

      const query = new Query(
        Op.equalTo('sys.versionStatus', deliveryApiVersionStatus),
        Op.or(Op.equalTo('sys.contentTypeId', ContentTypes.config))
      );

      /**
       * Fields must be defined to help improve query performance
       * If `SiteConfigFields` is NOT populated the query will not execute
       */
      query.fields = [...SiteConfigFields];

      if (!SiteConfigFields || SiteConfigFields.length <= 0) return;

      const results = yield api.search(query, 0);

      const siteConfig =
        (results?.items?.length || 0) > 0 ? results.items[0] : null;

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
