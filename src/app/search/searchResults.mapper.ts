import { contentTypes } from '~/schema/contentTypes.schema';
import type { SearchResultsMapper } from '@zengenti/contensis-react-base/models/search';
import type { ContentType } from '~/types/contentTypes/contentType.type';

/**
 * Represents additional properties that can be added to search result items.
 */
type ResultProps<Props> = {
  id: string;
} & Props;

/** Represents the base properties of a search result. */
export type BaseSearchResultProps = ResultProps<{
  title: string;
  uri?: string;
}>;

/**
 * Represents a function that maps a content entry to result properties.
 */
const baseMapper = (entry: ContentType<unknown>): BaseSearchResultProps => {
  return {
    id: entry.sys.id,
    uri: entry.sys.uri ?? undefined,
    title: entry.entryTitle,
  };
};

const blogEntryMapper = (
  entry: ContentType<unknown>
): BaseSearchResultProps => {
  return {
    id: entry.sys.id,
    uri: entry.sys.uri ?? undefined,
    title: entry.entryTitle,
  };
};

export type SearchResultProps = BaseSearchResultProps;
export type SourceEntryProps = ContentType<unknown>;

const searchResultsMapper: SearchResultsMapper<
  SearchResultProps,
  SourceEntryProps
> = entries => {
  return entries.map(entry => {
    const contentTypeId = entry.sys.contentTypeId;
    switch (contentTypeId) {
      case contentTypes.homePage:
        return blogEntryMapper(entry as ContentType<unknown>);
      default:
        return baseMapper(entry);
    }
  });
};

export default searchResultsMapper;
