import { ContentTypeMapping } from '@zengenti/contensis-react-base';
import loadable from '@loadable/component';

const contentTypeRoutes: ContentTypeMapping[] = [
  {
    contentTypeID: 'homepage',
    component: loadable<any>(
      () =>
        import(
          /* webpackChunkName: "home.template" */ '~/templates/home/home.template'
        )
    ),
  },
];

export default contentTypeRoutes;
