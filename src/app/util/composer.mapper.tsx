import { ContensisComposerField } from '~/models/contensis/composerField.type';
import getUuidByString from 'uuid-by-string';

export const composerMapper = ({
  composer,
  mappers,
}: {
  composer: ContensisComposerField[];
  mappers: { [type: string]: (...props: any[]) => any };
}) =>
  composer.map((item, index) => {
    const mapper = mappers[item.type];
    // const getUuid = getUuidByString()

    const value = mapper
      ? mapper(
          !Array.isArray(item.value) && typeof item.value === 'object'
            ? { ...item.value }
            : item.value
        )
      : item.value;

    // Attempting to create a stable id from the composer item's value
    // If value is and array or deep nested object then just fall back to index
    const id = !value
      ? `${item.type}-${index}`
      : value.id ||
        item.value?.sys?.id ||
        item.value?.asset?.sys?.id ||
        (((value.title && value.title.length > 0) ||
          (value.content && value.content.length > 0) ||
          (value.text && value.text.length > 0)) &&
          getUuidByString(value.title || value.content || value.text)) ||
        (typeof value === 'object' && `${item.type}-${index}`) ||
        getUuidByString(value.toString());

    return {
      _id: id,
      _type: item.type,
      value,
    };
  });
