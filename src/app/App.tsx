import React from 'react';
import { hot } from 'react-hot-loader';

import { ThemeProvider } from 'styled-components';
import { RouteLoader } from '@zengenti/contensis-react-base/routing';
import type { AppRootProps } from '@zengenti/contensis-react-base';

import GlobalStyle from '~/theme/globalStyles';
import PrintStyles from '~/theme/printStyles';
import { defaultTheme } from '~/theme';

import NotFound from '~/templates/notFound/notFound.template';
import PageLoader from '~/components/pageLoader/pageLoader.component';

const AppRoot = (props: AppRootProps) => {
  /** notFoundComponent={NotFound}*
    This 404 Page / notFoundComponent is for local development purposes only.
    To see this working on your live site, you will need to add this to the load balancer, to do this, please follow the steps below.

    1. Go to Contensis.com.
    2. Login and go to the help desk.
    3. Raise a new support request.
    4. Complete the form and give details of what error page you'd like to add e.g. 404, 503 etc.
    5. Upload the error page(s) as raw html files.
    6. Submit your request.
  */

  return (
    <div id="app-root">
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyle />
        <PrintStyles />
        <RouteLoader
          {...props}
          notFoundComponent={NotFound}
          loadingComponent={PageLoader}
        />
      </ThemeProvider>
    </div>
  );
};

export default hot(module)(AppRoot);
