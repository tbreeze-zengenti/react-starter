import { WelcomePageProps } from './welcome.template';

export const WelcomeMapper = (): WelcomePageProps => {
  return {
    meta: {
      pageTitle: 'Get started',
    },
    title: 'Welcome to React Starter',
  };
};
