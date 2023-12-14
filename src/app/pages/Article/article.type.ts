import { RouteComponentProps } from '@zengenti/contensis-react-base';
import { Block } from '@contensis/canvas-react';

export interface MappedArticlePage {
  title: string;
  canvas?: Block[];
}

export type PageArticleProps = RouteComponentProps<MappedArticlePage>;
