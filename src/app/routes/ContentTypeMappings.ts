import { ContentTypeMapping } from '@zengenti/contensis-react-base';
import { entryMapper } from '@zengenti/contensis-react-base/util';
import { ContentTypes } from '~/schema';

// Uncommented the lines below when you're ready to start building Content Type driven routes
// import { Home } from '~/dynamic/pages';
// import homeMapper from '~/pages/Home/home.mapper';

const contentTypeMappings: ContentTypeMapping[] = [
  // {
  //   contentTypeID: ContentTypes.homePage,
  //   component: Home,
  //   entryMapper: entryMapper(homeMapper),
  // },
];

export default contentTypeMappings;
