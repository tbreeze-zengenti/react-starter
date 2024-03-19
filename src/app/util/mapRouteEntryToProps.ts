import { RouteNode } from '@zengenti/contensis-react-base';
import { AppState } from '@zengenti/contensis-react-base/models/redux/appstate';

/**
 * Maps route entry properties to a custom type using a provided mapper function.
 * @template P - The type of the properties to map.
 * @template T - The type to map the properties to.
 * @param {Function} mapper - A function that maps properties of type P to type T.
 * @returns {Function} Returns a function that accepts a RouteNode and optional AppState, and maps the properties accordingly.
 */
export const mapRouteEntryToProps =
  <P, T>(mapper: (res: P) => T) =>
  (node: RouteNode, state?: AppState) => {
    const entry = {
      ...{ node },
      ...(node.entry || {}),
      ...{ state },
    } as P;
    try {
      return mapper(entry);
    } catch (e: any) {
      console.error(e);
      return;
    }
  };
