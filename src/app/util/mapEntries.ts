import { mapEntry } from './mapEntry';

export const mapEntries = <T, E>(
  entries: E[],
  mapper: (props: any) => T
): T[] => entries.map(e => mapEntry(e, mapper)).filter(x => x) as T[];
