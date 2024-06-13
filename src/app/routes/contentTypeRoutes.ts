import { ContentTypeMapping } from '@zengenti/contensis-react-base';

import { mapRouteEntryToProps } from '~/util/mapRouteEntryToProps';

import { Content } from '~/templates';
import { contentMapper } from '~/templates/content/content.mapper';
import { contentTypes } from '~/schema/contentTypes.schema';

/**
 * An array of objects representing content type mappings for routes.
 */
const contentTypeRoutes: ContentTypeMapping[] = [
  {
    contentTypeID: contentTypes.contentPage,
    component: Content,
    entryMapper: mapRouteEntryToProps(contentMapper),
  },
];

export default contentTypeRoutes;
