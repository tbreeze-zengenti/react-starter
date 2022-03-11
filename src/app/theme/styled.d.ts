import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      /** @returns white */
      white: string;
      /** @returns #37bfa7 */
      contensis: string;
      /** @returns #e75f44 */
      zengenti: string;
      primary: {
        /** @returns white */
        white: string;
      };
      secondary: {
        /** @returns white */
        white: string;
      };
    };
    bp: {
      em: {
        30: string;
        36: string;
        48: string;
        62: string;
        75: string;
        87.5: string;
      };
      px: {
        480: string;
        576: string;
        768: string;
        992: string;
        1200: string;
        1400: string;
      };
      ref: {};
    };
    mq: {
      min: {
        /** @returns media screen and (min-width: 480px) */
        480: string;
        /** @returns media screen and (min-width: 576px) */
        576: string;
        /** @returns media screen and (min-width: 768px) */
        768: string;
        /** @returns media screen and (min-width: 992px) */
        992: string;
        /** @returns media screen and (min-width: 1200px) */
        1200: string;
        /** @returns media screen and (min-width: 1400px) */
        1400: string;
      };
      max: {
        480: string;
        576: string;
        768: string;
        992: string;
        1200: string;
        1400: string;
      };
    };
    spacing: {
      /** @returns 0.25rem (4px) */
      0.25: string;
      /** @returns 0.5rem (8px) */
      0.5: string;
      /** @returns 1rem (16px) */
      1: string;
      /** @returns 1.25rem (20px) */
      1.25: string;
      /** @returns 1.5rem (24px) */
      1.5: string;
      /** @returns 2rem (32px) */
      2: string;
      /** @returns 2.5rem (40px) */
      2.5: string;
      /** @returns 3rem (48px) */
      3: string;
      /** @returns 4rem (64px) */
      4: string;
      /** @returns 5rem (80px) */
      5: string;
      /** @returns 6rem (96px) */
      6: string;
      /** @returns 7rem (112px) */
      7: string;
      /** @returns 8rem (128px) */
      8: string;
      /** @returns 9rem (144px) */
      9: string;
      /** @returns 10rem (160px) */
      10: string;
      /** @returns 11rem (176px) */
      11: string;
      /** @returns 12rem (192px) */
      12: string;
    };
  }
}
