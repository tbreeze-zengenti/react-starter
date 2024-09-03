/**
 * Gets the canonical domain from the current public URI.
 * @description This function removes any 'http/s/www' prefix from the public URI to enforce 'https://www.'.
 */
const projectUrl: string = PUBLIC_URI.replace(
  /(http|https):\/\/|www\.|\/$/g,
  ''
);

/**
 * The canonical domain URL.
 */
export const canonicalDomain = `https://www.${projectUrl}`;
