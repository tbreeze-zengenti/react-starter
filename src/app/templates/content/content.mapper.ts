import { ContentPageProps } from './content.template';

export const contentMapper = (props: any): ContentPageProps => {
  return {
    meta: {
      pageTitle: 'Get started',
    },
    title: 'Welcome to React Starter',
    body: props.bodyContent,
  };
};
