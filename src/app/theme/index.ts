import { colors, darkColors } from './colors';
import { breakpoints, mq, spacing, grid } from './layout';
import type { DefaultTheme } from 'styled-components';

export const defaultTheme: DefaultTheme = {
  colors,
  breakpoints,
  mq,
  spacing,
  grid,
};

export const darkTheme: DefaultTheme = {
  ...defaultTheme,
  colors: darkColors,
};
