import { ContensisEntry } from '~/types/contensis.type';
import { ReduxState } from '~/redux/redux.type';

/**
 * Represents a node in the website's navigation hierarchy.
 * @interface
 * @template N - The type of entry associated with the node.
 */
export interface Node<N = ContensisEntry> {
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

/**
 * Represents a node in the website's routing hierarchy, including ancestors and children.
 * @template N - The type of entry associated with the node.
 */
export type RouteNode<N> = Node<N> & {
  ancestors: Node<N>[];
  children: Node<N>[];
};

/**
 * Represents a route entry consisting of data associated with a route node and application state.
 * @template T - The type of additional data associated with the route entry.
 * @template N - The type of entry associated with the route node.
 */
export type RouteEntry<T, N = ContensisEntry> = T & {
  node: RouteNode<N>;
  state: ReduxState;
};
