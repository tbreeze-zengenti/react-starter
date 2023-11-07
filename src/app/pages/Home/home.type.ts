import { RouteComponentProps } from '@zengenti/contensis-react-base';

export interface MappedHomeEntry {
  title: string;
}

export type HomeProps = RouteComponentProps<MappedHomeEntry>;
