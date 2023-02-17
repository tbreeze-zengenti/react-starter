import { GET_SITE_CONFIG } from './types';

function action(type: string, payload = {}) {
  return { type, ...payload };
}

export const loadSiteConfig = () => action(GET_SITE_CONFIG);
