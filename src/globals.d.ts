// eslint-disable-next-line no-underscore-dangle
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

// Management API Credentials are here for testing, not for production use
declare const CLIENT_ID: string;
declare const SHARED_SECRET: string;

declare module 'app-root-path';
