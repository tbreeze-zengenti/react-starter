import { mapRouteEntryToProps } from '~/util/mapRouteEntryToProps';
import type { ContentTypeRoute } from '~/search/util/loadSearchConfig';

import { Content } from '~/templates';
import { contentMapper } from '~/templates/content/content.mapper';
import { contentTypes } from '~/schema/contentTypes.schema';

/**
 * An array of objects representing content type mappings for routes.
 */
const contentTypeRoutes: ContentTypeRoute[] = [
  {
    /** If connected to Leif (default), visit `/about` */
    contentTypeID: contentTypes.contentPage,
    component: Content,
    entryMapper: mapRouteEntryToProps(contentMapper),
  },
];

export default contentTypeRoutes;
