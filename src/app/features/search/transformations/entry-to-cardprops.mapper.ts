import { ContentTypes } from '~/schema';
import { mapEntries } from '@zengenti/contensis-react-base/util';
import type { Entry } from 'contensis-delivery-api/lib/models';

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
  date: (entry: Entry) => entry.publishedDate || entry.sys.version?.published,
};

export const mappers = {
  default: baseMapping,
  [ContentTypes.listingPage]: articleCardMapping,
};

const mapEntriesToResults = (entries: Entry[]) => mapEntries(entries, mappers);

export default mapEntriesToResults;
