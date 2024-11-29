import { takeEvery, select, put, call } from 'redux-saga/effects';
import { Query, Op } from 'contensis-delivery-api';
import { type SSRContext } from '@zengenti/contensis-react-base';
import { version } from '@zengenti/contensis-react-base/redux';
import { type SagaIterator } from 'redux-saga';

import { siteConfigMapper } from './siteConfig.mapper';

import { siteConfigFields } from '~/schema/fields.schema';
import { contentTypes } from '~/schema/contentTypes.schema';
import {
  getSiteConfig,
  getSiteConfigError,
  selectSiteConfigReady,
  setSiteConfig,
} from './siteConfig.slice';

type Action<Payload> = { type: string } & Payload;

export const SiteConfigSagas = [
  takeEvery<Action<SSRContext>>(getSiteConfig.type, getSiteConfigSaga),
];

/**
 * Saga to fetch then map site config entry into the redux store
 */

export function* getSiteConfigSaga({
  api,
}: SSRContext): SagaIterator {
  const isSiteConfigLoaded = yield select(selectSiteConfigReady);

  try {
    if (!isSiteConfigLoaded) {
      const deliveryApiVersionStatus = yield select(
        version.selectors.selectVersionStatus
      );

      const query = new Query(
        Op.equalTo('sys.versionStatus', deliveryApiVersionStatus),
        Op.or(Op.equalTo('sys.contentTypeId', contentTypes.config))
      );

      query.fields = [...siteConfigFields];

      if (!siteConfigFields || siteConfigFields.length <= 0) return;

      const results = yield call([api, api.search], query, 0);

      const mappedEntry = results?.items?.[0]
        ? siteConfigMapper(results.items[0])
        : null;

      if (mappedEntry) {
        yield put({ type: setSiteConfig.type, payload: mappedEntry });
      } else {
        yield put({ type: getSiteConfigError.type });
      }
    }
  } catch (error: unknown) {
    yield put({ type: getSiteConfigError.type, error: error?.toString() });
  }
}
