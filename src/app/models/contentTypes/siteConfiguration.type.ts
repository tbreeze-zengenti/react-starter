import { ContentType } from './contentType.type';

/**
 * Represents the site configuration content type.
 * @template T - The type of additional properties included in the content type beyond a standard Contensis Entry.
 */
export type ContentTypeSiteConfiguration = ContentType<{
  title: string;
}>;
