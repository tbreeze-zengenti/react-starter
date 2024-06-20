import { ContensisEntry } from '../contensis.type';

/**
 * Represents a content type with additional properties of type T.
 * @template T - The additional properties to be included in the content type.
 */
export type ContentType<T> = ContensisEntry & T;
