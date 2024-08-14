import * as React from 'react';

/**
 * React hook for determining the preferred color scheme (aka 'prefers-color-scheme').
 * When server side rendered returns `no-preference`.
 */
export const usePrefersColorScheme = () => {
  const [preferredColorSchema, setPreferredColorSchema] = React.useState<
    'dark' | 'light' | 'no-preference'
  >(() => {
    if (typeof window === 'undefined') return 'no-preference';

    const isDark = window.matchMedia('(prefers-color-scheme: dark)');
    const isLight = window.matchMedia('(prefers-color-scheme: light)');

    return isDark.matches
      ? 'dark'
      : isLight.matches
        ? 'light'
        : 'no-preference';
  });

  React.useEffect(() => {
    if (typeof window.matchMedia !== 'function') return;

    const isDark = window.matchMedia('(prefers-color-scheme: dark)');
    const isLight = window.matchMedia('(prefers-color-scheme: light)');

    if (typeof isLight.addEventListener === 'function') {
      const darkListener = ({ matches }: MediaQueryListEvent) => {
        if (matches) {
          setPreferredColorSchema('dark');
        }
      };
      const lightListener = ({ matches }: MediaQueryListEvent) => {
        if (matches) {
          setPreferredColorSchema('light');
        }
      };
      isDark.addEventListener('change', darkListener);
      isLight.addEventListener('change', lightListener);
      return () => {
        isDark.removeEventListener('change', darkListener);
        isLight.removeEventListener('change', lightListener);
      };
    }
    return;
  }, []);

  return preferredColorSchema;
};

export default usePrefersColorScheme;
