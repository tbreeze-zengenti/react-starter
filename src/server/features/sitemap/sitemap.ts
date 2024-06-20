import { Op, OrderBy, Query } from 'contensis-delivery-api';
import { SitemapStream, streamToPromise } from 'sitemap';
import { cachedSearch } from '@zengenti/contensis-react-base/util';
import type { Entry } from 'contensis-delivery-api/lib/models';

const publicUrl = PUBLIC_URL;

const contensisConfig = {
  rootUrl: DELIVERY_API_CONFIG.rootUrl,
  accessToken: DELIVERY_API_CONFIG.accessToken,
  projectId: DELIVERY_API_CONFIG.projectId,
  languages: ['en-GB'], // Add other languages here if multilingual project
  fields: [
    'authentication',
    'navigationSettings',
    'sys.contentTypeId',
    'sys.language',
    'sys.uri',
    'sys.version',
    'sys.slug',
    'sys.metadata',
  ],
  previewUrl: publicUrl,
};

const query = (pageIndex: number, pageSize: number) => {
  const { fields, languages } = contensisConfig;

  /**
   * Only return dataFormat entry, where sys.uri exists (the entry has a location/node assigned)
   */
  const query = new Query(
    Op.equalTo('sys.versionStatus', 'published'),
    Op.in('sys.language', ...languages),
    Op.equalTo('sys.dataFormat', 'entry'),
    Op.exists('sys.uri', true)
  );

  if (fields && fields.length > 0) {
    query.fields = [...fields];
  }

  query.pageSize = pageSize;
  query.pageIndex = pageIndex;

  /*
   * We need an orderBy, otherwise result ordering is volatile and
   * changes from page to page, leading to duplicate (or missing) results
   */
  query.orderBy = OrderBy.asc('sys.contentTypeId');
  return query;
};

const getEntries = async (
  pageIndex: number,
  pageSize: number,
  project: string
) => {
  try {
    return await cachedSearch.search(
      query(pageIndex, pageSize),
      6,
      project || contensisConfig.projectId
    );
  } catch (error: unknown) {
    throw new Error(error as string);
  }
};

const mapEntryToSitemapUrl = (entry: Entry) => {
  const { uri, version } = entry.sys;
  return {
    url: encodeURI(uri),
    lastmod: version?.published,
  };
};

function dynamicSort(property: string) {
  let sortOrder = 1;
  if (property[0] === '-') {
    sortOrder = -1;
    property = property.substr(1);
  }
  return function (a: any, b: any) {
    /*
     * Next line works with strings and numbers,
     * and you may want to customize it to your needs
     */
    const result =
      a[property] < b[property] ? -1 : a[property] > b[property] ? 1 : 0;
    return result * sortOrder;
  };
}

const generateSitemap = async (project: string) => {
  const pageSize = 100;
  const entryInfo = await getEntries(0, pageSize, project);

  /** Fetch all other pages concurrently */
  const getEntryPages = Array.from(
    // Missing prop pageCount: https://github.com/contensis/contensis-core-api/issues/9
    // @ts-expect-error
    { length: entryInfo.pageCount - 1 },
    (_, i) => getEntries(i + 1, pageSize, project)
  );

  const entryPages = await Promise.all(getEntryPages);
  const entriesList = [
    ...entryInfo.items,
    ...entryPages.flatMap(pg => pg.items),
  ];

  /** Map entries to objects with url and lastmod props */
  const mappedUrls = entriesList
    .map(e => mapEntryToSitemapUrl(e))
    .sort(dynamicSort('url'));

  /** Create sitemap stream object */
  const smStream = new SitemapStream({
    hostname: `https://${publicUrl}`,
    lastmodDateOnly: true,
  });

  mappedUrls.forEach(item => smStream.write(item));
  smStream.end();

  return await streamToPromise(smStream);
};

export default generateSitemap;
