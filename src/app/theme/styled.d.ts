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
        mobile: string;
        tablet: string;
        laptop: string;
        desktop: string;
        largeDesktop: string;
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
      xxxs: string;
      xxs: string;
      xs: string;
      s: string;
      m: string;
      l: string;
      xl: string;
      xxl: string;
      xxxl: string;
    };
  }
}
