import { RouteNode } from '@zengenti/contensis-react-base';
import { AppState } from '@zengenti/contensis-react-base/models/redux/appstate';

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
