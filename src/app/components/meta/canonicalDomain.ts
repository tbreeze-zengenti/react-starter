/**
 * @description
 * Gets the public url from the current .env
 * Strips any `http/s/www` prefix so we can enforce `https://www.`
 */

const projectUrl: string = PUBLIC_URI.replace(
  /(http|https):\/\/|www\.|\/$/g,
  ''
);

export const canonicalDomain = `https://www.${projectUrl}`;
