import { Entry } from 'contensis-delivery-api/lib/models';

export const mapEntriesToProps = <P, T>(
  entries: Entry[],
  mapper: (props: P) => T
) => {
  try {
    return entries.map(e => mapper(e as P));
  } catch (e) {
    console.error(e);
    return [];
  }
};
