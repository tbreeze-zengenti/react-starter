import { RouteComponentProps } from '@zengenti/contensis-react-base';

export interface StaticEntry<T> extends RouteComponentProps {
  entry: RouteComponentProps['entry'] & T;
}
