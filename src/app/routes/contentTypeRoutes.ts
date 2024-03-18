import { ContentTypeMapping } from '@zengenti/contensis-react-base';
import loadable from '@loadable/component';
import { mapRouteEntryToProps } from '~/util/mapRouteEntryToProps';
import Content from '~/templates/content/content.template';
import { contentMapper } from '~/templates/content/content.mapper';

const contentTypeRoutes: ContentTypeMapping[] = [
  {
    contentTypeID: 'contentPage',
    component: Content,
    entryMapper: mapRouteEntryToProps(contentMapper),
  },
];

export default contentTypeRoutes;
