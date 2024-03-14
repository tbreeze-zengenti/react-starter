import 'styled-components';
import {
  BreakpointKeys,
  BreakpointValueContext,
  BreakpointWidthContext,
  BreakpointsTheme,
  MediaQueryTheme,
} from './layout';
import { ColorsTheme } from './colors';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: ColorsTheme;
    breakpoints: BreakpointsTheme;
    mq: MediaQueryTheme;
    spacing: {
      /** @returns 0.8rem */
      xxxs: string;
      /** @returns 1.6rem */
      xxs: string;
      /** @returns 2.4rem */
      xs: string;
      /** @returns 3.2rem */
      s: string;
      /** @returns 4rem */
      m: string;
      /** @returns 6.4rem */
      l: string;
      /** @returns 8rem */
      xl: string;
      /** @returns 12rem */
      xxl: string;
      /** @returns 14.4rem */
      xxxl: string;
    };
    grid: {
      default: {
        width: string;
        gutter: string;
        margin: string;
      };
    };
  }
}
