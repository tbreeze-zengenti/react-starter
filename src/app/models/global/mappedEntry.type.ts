import { RouteComponentProps } from '@zengenti/contensis-react-base';
import { WithRequired } from './withRequired.type';

export type MappedEntry<T> = WithRequired<
  RouteComponentProps<T>,
  'mappedEntry'
>;
