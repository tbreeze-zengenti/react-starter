import { ContentTypeMapping } from '@zengenti/contensis-react-base';
import { entryMapper } from '@zengenti/contensis-react-base/util';
import { ContentTypes } from '~/schema';

import { FormConfirmation, Home } from '~/dynamic/pages';
import homeMapper from '~/pages/Home/home.mapper';
import FormConfirmationMapper from '~/pages/FormConfirmation/FormConfirmation.mapper';

const contentTypeMappings: ContentTypeMapping[] = [
  {
    contentTypeID: ContentTypes.homePage,
    component: Home,
    entryMapper: entryMapper(homeMapper),
    fieldLinkDepths: {
      'bodyContent.promotedProduct.product': 1,
      'bodyContent.promotedProduct.product.plantVariant.matchingPots': 2,
    },
    linkDepth: 0,
  },

  {
    contentTypeID: 'formPlaceholderTest',
    component: FormConfirmation,
    entryMapper: entryMapper(FormConfirmationMapper),
  },
];

export default contentTypeMappings;
