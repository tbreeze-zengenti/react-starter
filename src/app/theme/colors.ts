export type ColorKeys = 'contensis' | 'zengenti';

export type ColorsTheme = { [Key in ColorKeys]: string };

export const colors: ColorsTheme = {
  /** @returns #37bfa7 */
  contensis: '#37bfa7',
  zengenti: '#002033',
};
