import { ContensisComposerField } from '~/models/contensis/composerField.type';
import { composerMapper } from './composer.mapper';

export const createComposer = (config: {
  [key: string]: {
    // component: (props?: any) => JSX.Element | null;
    component: any;
    mapper: (...props: any[]) => any;
  };
}) => {
  const { mappers, components } = Object.entries(config).reduce(
    (obj, [key, value]) => ({
      components: { ...obj.components, [key]: value.component },
      mappers: { ...obj.mappers, [key]: value.mapper },
    }),

    {
      components: {} as {
        [key: string]: (props?: any) => JSX.Element | null;
      },
      mappers: {},
    }
  );

  return {
    components,
    mapper: (composer: ContensisComposerField[]) =>
      composerMapper({ composer, mappers }),
  };
};
