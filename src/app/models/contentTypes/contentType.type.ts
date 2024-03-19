import { ContensisEntry } from '../contensis.type';

/**
 * Represents a content type with additional properties of type T.
 * @template T - The additional properties to be included in the content type.
 */
export type ContentType<T> = ContensisEntry & T;

/**
 * Represents a content type page with additional properties of type T and dynamic additional properties.
 * @template T - The additional properties to be included in the content type page.
 */
export type ContentTypePage<T> = ContentType<T> & Record<string, unknown>;
