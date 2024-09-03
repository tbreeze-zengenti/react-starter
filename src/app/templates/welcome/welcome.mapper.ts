import type { WelcomeTemplateProps } from './welcome.template';

export const welcomeMapper = (): WelcomeTemplateProps => {
  return {
    meta: {
      pageTitle: 'Get started',
    },
    title: 'Welcome to React Starter',
  };
};
