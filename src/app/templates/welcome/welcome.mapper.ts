import { WelcomePageProps } from './welcome.template';

export const welcomeMapper = (): WelcomePageProps => {
  return {
    meta: {
      pageTitle: 'Get started',
    },
    title: 'Welcome to React Starter',
  };
};
