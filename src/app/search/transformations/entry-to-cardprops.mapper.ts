import { mapEntries } from '@zengenti/contensis-react-base/util';
import type { Entry } from 'contensis-delivery-api/lib/models';

const baseMapping = {
  title: 'entryTitle',
  description: 'entryDescription',
  image: {
    src: 'entryThumbnail.asset.sys.uri',
    alt: 'entryThumbnail.altText',
    caption: 'entryThumbnail.caption',
  },
  link: 'sys.uri',
  id: 'sys.id',
};

export const mappers = {
  default: baseMapping,
};

const mapEntriesToResults = (entries: Entry[]) => mapEntries(entries, mappers);

export default mapEntriesToResults;
