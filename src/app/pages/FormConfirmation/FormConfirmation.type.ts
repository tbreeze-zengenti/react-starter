import { Block } from '@contensis/canvas-react';
import { RouteComponentProps } from '@zengenti/contensis-react-base';

export interface MappedFormConfirmationEntry {
  title: string;
  canvas: Block[];
}

export type FormConfirmationProps =
  RouteComponentProps<MappedFormConfirmationEntry>;
