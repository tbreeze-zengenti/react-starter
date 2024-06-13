import React from 'react';
import { Preview } from '@storybook/react';

import { MemoryRouter } from 'react-router-dom';

import { ThemeProvider } from 'styled-components';
import { defaultTheme } from '~/theme';
import GlobalStyle from '~/theme/globalStyles';

const preview: Preview = {
  decorators: [
    Story => (
      <MemoryRouter initialEntries={['/']}>
        <div id="app-root">
          <Story />
        </div>
      </MemoryRouter>
    ),
    Story => (
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyle />
        <Story />
      </ThemeProvider>
    ),
  ],
};

export default preview;
