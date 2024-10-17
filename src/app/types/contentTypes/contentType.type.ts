import { StrictEntry } from 'contensis-delivery-api';
/**
 * Represents a content type with additional properties of type T.
 * @template T - The additional properties to be included in the content type.
 */
export type ContentType<T> = StrictEntry & T;
