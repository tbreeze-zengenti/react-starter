import { RouteComponentProps } from '@zengenti/contensis-react-base';
import { WithRequired } from './withRequired.type';

/**
 * Represents a mapped entry with required 'mappedEntry' property.
 * @template T - The type of mapped entry.
 */
export type MappedEntry<T> = WithRequired<
  RouteComponentProps<T>,
  'mappedEntry'
>;
