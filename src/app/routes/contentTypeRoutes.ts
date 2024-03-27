import { ContentTypeMapping } from '@zengenti/contensis-react-base';

import { mapRouteEntryToProps } from '~/util/mapRouteEntryToProps';

import { Content } from '~/templates';

import { contentMapper } from '~/templates/content/content.mapper';

/**
 * An array of objects representing content type mappings for routes.
 */
const contentTypeRoutes: ContentTypeMapping[] = [
  {
    contentTypeID: 'contentPage', // The content type ID.
    component: Content, //  The component to be rendered for this content type.
    entryMapper: mapRouteEntryToProps(contentMapper), // The utility function used to map the route entry props.
  },
];

export default contentTypeRoutes;
