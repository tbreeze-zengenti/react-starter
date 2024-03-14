import { SearchResultsMapper } from '@zengenti/contensis-react-base/models/search';
import { ContentType } from '~/types/global/contentType.type';

type ResultProps<Props> = {
  id: string;
} & Props;

export type BaseSearchResultProps = {
  title: string;
  uri: string;
};

const baseMapping = (
  entry: ContentType<unknown>
): ResultProps<BaseSearchResultProps> => {
  return {
    id: entry.sys.id ?? '',
    uri: entry.sys.uri ?? '/',
    title: entry.entryTitle ?? '',
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
      default:
        return baseMapping(entry);
    }
  });
};

export default searchResultsMapper;
