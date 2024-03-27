import React from 'react';
import { Preview } from '@storybook/react';

import { MemoryRouter } from 'react-router-dom';

import { ThemeProvider } from 'styled-components';
import { defaultTheme } from '~/theme';
import GlobalStyle from '~/theme/globalStyles';

const preview: Preview = {
    decorators: [
        // react-router-dom support
        Story => (
            <MemoryRouter initialEntries={['/']}>
                <div id="app-root">
                    <Story />
                </div>
            </MemoryRouter>
        ),
        // theming
        Story => (
            <ThemeProvider theme={defaultTheme}>
                <GlobalStyle />
                <Story />
            </ThemeProvider>
        ),
    ],
};

export default preview;
