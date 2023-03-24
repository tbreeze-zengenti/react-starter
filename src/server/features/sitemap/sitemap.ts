import { Op, OrderBy, Query } from 'contensis-delivery-api';
import { streamToPromise, SitemapStream } from 'sitemap';
import { cachedSearch } from '~/routes/contensisDeliveryAPI';

/* global PUBLIC_URI */
const publicUri = PUBLIC_URI;

/* global DELIVERY_API_CONFIG */
const contensisConfig = {
  rootUrl: DELIVERY_API_CONFIG.rootUrl,
  accessToken: DELIVERY_API_CONFIG.accessToken,
  projectId: DELIVERY_API_CONFIG.projectId,
  languages: ['en-GB'], // Add other languages here if multi-lingual project
  contentTypes: [
    // Only used for v11 by default, as v12 is based on existence of sys.uri
    'makersListingPage',
    'landingPage',
    'exhibitionPage',
    'contentPage',
    'eventPage',
    'collectionsPage',
    'listingPage',
    'searchPage',
  ],
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
  previewUrl: publicUri,
};

const query = (pageIndex: number, pageSize: number) => {
  const { fields, languages } = contensisConfig;

  // Default setup for V12 is we only return dataFormat entry, where sys.uri exists (the entry has a location/node assigned)
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

  /* We need an orderBy, otherwise result ordering is volatile and
   changes from page to page, leading to duplicate (or missing) results */
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
  } catch (error: any) {
    throw new Error(error);
  }
};

const mapEntryToSitemapUrl = (entry: any) => {
  const { uri } = entry.sys;
  // v12
  const url = uri;

  // Return url and lastmod date
  return { url: encodeURI(url), lastmod: entry.sys.version.published };
};

function dynamicSort(property: string) {
  let sortOrder = 1;
  if (property[0] === '-') {
    sortOrder = -1;
    property = property.substr(1);
  }
  return function (a: any, b: any) {
    /* next line works with strings and numbers,
     * and you may want to customize it to your needs
     */
    const result =
      a[property] < b[property] ? -1 : a[property] > b[property] ? 1 : 0;
    return result * sortOrder;
  };
}

const generateSitemap = async (project: string) =>
  // eslint-disable-next-line
  new Promise(async (resolve, reject) => {
    try {
      const pageSize = 100;
      const entryInfo = await getEntries(0, pageSize, project);

      const getEntryPages = [];
      for (let pageIndex = 1; pageIndex < entryInfo.pageCount; pageIndex++) {
        getEntryPages.push(getEntries(pageIndex, pageSize, project));
      }

      const entryPages = await Promise.all(getEntryPages);
      const entriesList = [
        ...entryInfo.items,
        // eslint-disable-next-line prefer-spread
        ...[].concat.apply(
          [],
          entryPages.map(pg => pg.items)
        ),
      ];

      // Map entries to objects with url and lastmod props
      const mappedUrls = entriesList
        .map(e => mapEntryToSitemapUrl(e))
        .sort(dynamicSort('url'));

      // Create sitemap stream object
      const smStream = new SitemapStream({
        hostname: `https://${publicUri}`,
        lastmodDateOnly: true,
      });

      mappedUrls.forEach(item => smStream.write(item));
      // smStream.write({ url: '/page-1/', changefreq: 'daily', priority: 0.3, lastmod: new Date() });
      smStream.end();

      await streamToPromise(smStream).then(sm => resolve(sm));
    } catch (error) {
      reject(error);
    }
  });

export default generateSitemap;
