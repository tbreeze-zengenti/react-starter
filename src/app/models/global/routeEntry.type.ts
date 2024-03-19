import { AppState } from '@zengenti/contensis-react-base/models/redux/appstate';
import { SiteConfigState } from '~/redux/siteConfig/reducers';
import { ContensisEntry } from '../contensis/entry.type';

export interface Node<N> {
  id: string;
  projectId: string;
  title: string;
  displayName: string;
  slug: string;
  path: string;
  parentId?: string;
  language: string;
  entryId?: string;
  entry?: N;
  childCount: number;
  includeInMenu: boolean;
}

export type RouteNode<N> = Node<N> & {
  ancestors: Node<N>[];
  children: Node<N>[];
};

export type RouteEntry<T, N = ContensisEntry> = T & {
  node: RouteNode<N>;
  state: AppState & { config: SiteConfigState };
};
