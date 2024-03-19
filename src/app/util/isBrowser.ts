/**
 * Checks if the code is running in a browser environment.
 * @returns {boolean} Returns true if the code is running in a browser environment, otherwise returns false.
 */
export const isBrowser = (): boolean => typeof window !== 'undefined';
