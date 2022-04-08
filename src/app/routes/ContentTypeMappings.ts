import { ContentTypeMapping } from '@zengenti/contensis-react-base';
import { entryMapper } from '@zengenti/contensis-react-base/util';
import { ContentTypes } from '~/schema';

import { Home } from '~/dynamic/pages';

import homeMapper from '~/pages/Home/home.mapper';

const contentTypeMappings: ContentTypeMapping[] = [
  {
    contentTypeID: ContentTypes.homePage,
    component: Home,
    entryMapper: entryMapper(homeMapper),
  },
];

export default contentTypeMappings;
