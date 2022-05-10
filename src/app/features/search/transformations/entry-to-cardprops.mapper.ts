import { ContentTypes } from '~/schema';
import { mapEntries } from '@zengenti/contensis-react-base/util';

const baseMapping = {
  title: 'entryTitle',
  description: 'entryDescription',
  image: 'image.asset.sys.uri',
  link: 'sys.uri',
};

const articleCardMapping = {
  ...baseMapping,
  category: {
    $path: 'category',
    $formatting: {
      title: 'entryTitle',
      id: 'sys.id',
    },
  },
  date: (entry: any) => entry.publishedDate || entry.sys.version.published,
};

export const mappers = {
  default: baseMapping,
  [ContentTypes.listingPage]: articleCardMapping,
};

const mapEntriesToResults = (entries: any[]) => mapEntries(entries, mappers);

export default mapEntriesToResults;
