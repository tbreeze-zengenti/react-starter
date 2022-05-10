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
