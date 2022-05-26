import type { ForkEffect } from '@redux-saga/core/effects';
import type { Reducer } from 'redux';

declare module '*.svg' {
  // Default type is string, change this if you use a custom svg loader.
  const content: string;
  export default content;
}

declare module '*.png' {
  // Default type is string, change this if you use a custom png loader.
  const content: string;
  export default content;
}

declare module '*.jpg' {
  // Default type is string, change this if you use a custom jpeg loader.
  const content: string;
  export default content;
}

declare module 'zengenti-forms-package' {
  interface TextComponentProps {
    defaultValue?: string;
    id: string;
    instructions?: string;
    key?: string;
    label: string;
    onChange?: (event: InputEvent) => void;
    onBlur?: (event: InputEvent) => void;
    placeholder?: string;
    required?: boolean;
    showField?: boolean;
    type: 'text' | 'email' | 'tel' | 'url' | 'date' | 'hidden' | 'number';
    validation: {
      message?: string;
      rules?: {
        onBlur?: (event: InputEvent) => void;
        onChange?: (event: InputEvent) => void;
      };
    };
    autocomplete?: string;
    width?: string;
    forceShowOnBlurErrors?: boolean;
  }

  const Form: React.FunctionComponent<{
    formId?: string;
    hideRef?: boolean;
    showSteps?: boolean;
    hiddenFormData?: Record<string, string>;
    localisedPhrases?: Record<string, string>;
    transformTextfieldProps?(props: {
      previousItem?: Record<string, any>;
      item?: Record<string, any>;
    }): (props: TextComponentProps) => TextComponentProps;
  }>;
  const reducer: Reducer;
  const sagas: ForkEffect[];
  export { Form, reducer, sagas };
}
