import { ContentTypeMapping } from '@zengenti/contensis-react-base';

import { ContentTypes } from '../schema';
import { entryMapper } from '../util/json-mapper';

import { Home } from '~/dynamic/pages';
import homeMapper from '~/pages/Home/home.mapper';

const { homePage } = ContentTypes;

const contentTypeMappings: ContentTypeMapping[] = [
  {
    contentTypeID: homePage,
    component: Home,
    entryMapper: entryMapper(homeMapper),
  },
];

export default contentTypeMappings;
