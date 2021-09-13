import { put, call } from 'redux-saga/effects';
import { queryParams, routeParams } from '../util/navigation';
// import { GET_SITE_CONFIG } from '~/core/redux/siteConfig/types';
import { ROUTE_HAS_LOADED, ROUTE_WILL_LOAD } from './types';
import { ContentTypes, ListingPages } from '../schema';

export default {
  onRouteLoad: function* onRouteLoad({
    path,
    location,
    // staticRoute,
  }) {
    yield put({ type: ROUTE_WILL_LOAD, path, location });
    // Set params for routing saga
    return {
      customNavigation: {
        ancestors: false,
        children: false,
        siblings: false,
        tree: true,
      },
    };
  },
  onRouteLoaded: function* onRouteLoaded({
    path,
    entry,
    location,
    staticRoute,
  }) {
    const params = {
      ...routeParams(staticRoute),
      ...queryParams(location && location.search),
    };

    const { sys: { contentTypeId, id } = {} } = entry || {}; // Desturucture the elements from entry.sys in a null-safe way

    let triggerListing = false;
    // To give the Content Type pages with Listings
    // the right parameters to drive them
    switch (contentTypeId) {
      case ContentTypes.category:
        params.category = id;
        triggerListing = true;
        break;
      default:
        break;
    }

    if (
      path.startsWith('/search') ||
      (triggerListing && Object.keys(ListingPages).includes(contentTypeId))
    ) {
      const { setRouteFilters } = yield import(
        /* webpackChunkName: "search-package" */
        '@zengenti/contensis-react-base/search'
      );
      const transformations = yield import(
        /* webpackChunkName: "search-mappers" */
        '~/features/search/transformations'
      );

      yield call(setRouteFilters, {
        listingType: triggerListing ? ListingPages[contentTypeId] : undefined,
        mappers: transformations,
        params,
      });
    }

    yield put({ type: ROUTE_HAS_LOADED, path, entry });
  },
};
