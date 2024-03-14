import 'styled-components';
import {
  BreakpointsTheme,
  GridTheme,
  MediaQueryTheme,
  SpacingTheme,
} from './layout';
import { ColorsTheme } from './colors';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: ColorsTheme;
    breakpoints: BreakpointsTheme;
    mq: MediaQueryTheme;
    spacing: SpacingTheme;
    grid: GridTheme;
  }
}
