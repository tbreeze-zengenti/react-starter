import { ReduxState } from '~/redux/redux.type';
import { Node, StrictEntry, Entry } from 'contensis-delivery-api';

/**
 * Represents a node in the website's routing hierarchy, including ancestors and children.
 * @template N - The type of entry associated with the node.
 */
export type RouteNode<REntry extends StrictEntry = Entry> = Node<REntry> & {
  ancestors: Node[];
  children: Node[];
};

/**
 * Represents a route entry consisting of data associated with a route node and application state.
 * @template T - The type of additional data associated with the route entry.
 * @template N - The type of entry associated with the route node.
 */
export type RouteEntry<REntry, NEntry extends StrictEntry = Entry> = REntry & {
  node: RouteNode<NEntry>;
  state: ReduxState;
};
