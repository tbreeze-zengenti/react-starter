// eslint-disable-next-line no-underscore-dangle
declare const __isBrowser__: boolean;

declare const DELIVERY_API_CONFIG: {
  rootUrl: string;
  accessToken: string;
  projectId: string;
  livePublishingRootUrl: string;
};

declare const DISABLE_SSR_REDUX: boolean;

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

declare module 'app-root-path';

declare module '*.svg' {
  const content: any;
  export default content;
}

declare module '*.png' {
  const content: any;
  export default content;
}

declare module '*.jpg' {
  const content: any;
  export default content;
}

declare module 'zengenti-forms-package' {
  const Form: React.FunctionComponent<{
    formId?: string;
    form?: any;
    formSettings?: any;
    showCaptcha?: boolean;
    isHuman?: boolean;
    currentPageIndex?: number;
    currentPageReadyToProceed?: boolean;
    hideRef?: boolean;
    showSteps?: boolean;
    hiddenFormData?: Record<string, unknown>;
    localisedPhrases?: Record<string, unknown>;
    submitForm?(...args: unknown[]): unknown;
    setFormId?(...args: unknown[]): unknown;
    updateFormData?(...args: unknown[]): unknown;
    validateInput?(...args: unknown[]): unknown;
    captchaResponse?(...args: unknown[]): unknown;
    updateCheckbox?(...args: unknown[]): unknown;
    goToNextPage?(...args: unknown[]): unknown;
    goToPreviousPage?(...args: unknown[]): unknown;
    setShowValidationSummary?(...args: unknown[]): unknown;
    transformTextfieldProps?(...args: unknown[]): unknown;
  }>;
  const reducer: any;
  const sagas: any;
  export { Form, reducer, sagas };
}
