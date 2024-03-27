import 'styled-components';

import { colors } from './colors';
import { breakpoints, grid, mq, spacing } from '~/theme/layout';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: typeof colors;
    breakpoints: typeof breakpoints;
    mq: typeof mq;
    spacing: typeof spacing;
    grid: typeof grid;
  }
}
