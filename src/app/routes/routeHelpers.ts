import { StaticRoute, MatchedRoute } from '@zengenti/contensis-react-base';
import queryString from 'query-string';

export function queryParams(search = '') {
  return queryString.parse(
    typeof window != 'undefined' ? window.location.search : search
  );
}
export const routeParams = (staticRoute: MatchedRoute<string, StaticRoute>) =>
  staticRoute && staticRoute.params ? staticRoute.params : {};

export const buildUrl = (route: string, params: { [key: string]: string }) => {
  const qs = queryString.stringify(params);
  const path = qs ? `${route}?${qs}` : route;
  return path;
};

export const clientHostname = () =>
  `${window.location.protocol}//${window.location.hostname}:${window.location.port}`;

export const addHostname =
  typeof window == 'undefined' || window.location.host === 'localhost:3000'
    ? `https://${PUBLIC_URI /* global PUBLIC_URI */}`
    : clientHostname();
