export const typography = {
  family: {
    body: `Arial, Helvetica, sans-serif`,
    heading: `Arial, Helvetica, sans-serif`,
  },
  size: {
    '1': '5.4rem',
    '2': '4.4rem',
    '3': '3.2rem',
    '4': '2.5rem',
    '5': '2.1rem',
    '6': '1.8rem',
    base: '1.6rem',
    small: '1.4rem',
  },
  lineHeight: {
    base: '1.5',
    '1': '3',
    '2': '2.4',
    '3': '2',
    '4': '1.75',
  },
  weight: {
    thin: '100',
    extralight: '200',
    light: '300',
    normal: '400',
    medium: '500',
    semibold: '600',
    bold: '700',
    extrabold: '800',
    black: '900',
  },
};

for (const key of Object.keys(typography)) {
  const value = typography[key];
  console.log(`${key} -> ${value}`);
}
