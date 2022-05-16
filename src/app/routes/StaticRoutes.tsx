import React from 'react';
import { StaticRoute } from '@zengenti/contensis-react-base';

import { CorePages, Home, Search } from '~/dynamic/pages';
import { injectSearch } from '~/redux/dynamic';

const NotFoundPage = CorePages[404];

const staticRoutes: StaticRoute[] = [
  {
    path: '/',
    children: [
      {
        index: true,
        element: <Home />,
        fetchNode: true,
      },
      {
        path: 'search',
        element: <Search />,
        injectRedux: injectSearch,
        children: [
          {
            index: true,
          },
          {
            path: ':facet',
          },
        ],
      },
      // ********************************
      // ˅˅ Do not delete these routes ˅˅
      {
        path: '404',
        element: <NotFoundPage />,
      },
      {
        path: 'zenInfo',
        element: <CorePages.ZenInfo />,
      },
      // ˄˄ Do not delete these routes ˄˄
      // ********************************
    ],
  },
];

export default staticRoutes;
