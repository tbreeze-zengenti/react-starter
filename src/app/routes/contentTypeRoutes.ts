import { mapRouteEntryToProps } from '~/util/mapRouteEntryToProps';
import { ContentTypeRoute } from '~/util/loadSearchConfig';

import { Content } from '~/templates';
import { contentMapper } from '~/templates/content/content.mapper';
import { contentTypes } from '~/schema/contentTypes.schema';

/**
 * An array of objects representing content type mappings for routes.
 */
const contentTypeRoutes: ContentTypeRoute[] = [
  {
    contentTypeID: contentTypes.contentPage,
    component: Content,
    entryMapper: mapRouteEntryToProps(contentMapper),
  },
];

export default contentTypeRoutes;
