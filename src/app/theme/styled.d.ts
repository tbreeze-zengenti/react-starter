import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      white: string;
      contensis: string;
      zengenti: string;
      primary: {
        white: string;
      };
      secondary: {
        white: string;
      };
    };
    breakpoints: {
      px: {
        mobile: number;
        tablet: number;
        laptop: number;
        desktop: number;
        largeDesktop: number;
      };
    };
    mq: {
      min: {
        mobile: string;
        tablet: string;
        laptop: string;
        desktop: string;
        largeDesktop: string;
      };
      max: {
        mobile: string;
        tablet: string;
        laptop: string;
        desktop: string;
        largeDesktop: string;
      };
    };
    spacing: {
      /** @returns 0.8rem */
      xxxs: string;
      /** @returns 1.6rem */
      xxs: string;
      /** @returns 2.4rem */
      xs: string;
      /** @returns 3.2rem */
      s: string;
      /** @returns 4em */
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
