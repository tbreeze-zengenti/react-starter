declare const __isBrowser__: boolean;

declare const ALIAS: string;

declare const DELIVERY_API_CONFIG: {
  rootUrl: string;
  accessToken: string;
  projectId: string;
  livePublishingRootUrl: string;
};

declare const DISABLE_SSR_REDUX: boolean;

declare const PROJECT: string;

declare const PROJECTS: {
  id: string;
  publicUri: string;
}[];

declare const PROXY_DELIVERY_API: boolean;

declare const PUBLIC_URI: string;

declare const REVERSE_PROXY_PATHS: string[];

declare const SERVERS: {
  alias: string;
  api: string;
  internalVip?: string;
  cms: string;
  web: string;
  iis: string;
  previewIis: string;
};

declare const STATIC_PATH: string;

declare const VERSION: string;

declare const WSFED_LOGIN: false;

declare const ALIAS: string;
declare const ACCESS_TOKEN: string;
declare const PUBLIC_URL: string;
declare const PROJECT: string;

declare module 'app-root-path';
