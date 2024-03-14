export const mapEntry = <T, E>(entry: E, mapper: (props: E) => T): T | null => {
  try {
    const mappedEntry = mapper(entry);
    return mappedEntry;
  } catch (e) {
    return null;
  }
};
