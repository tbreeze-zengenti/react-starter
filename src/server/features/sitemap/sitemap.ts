import { SitemapStream, streamToPromise } from 'sitemap';
import { StaticRoute } from '@zengenti/contensis-react-base';

import { Op, OrderBy, Query } from 'contensis-delivery-api';
import type { Entry } from 'contensis-delivery-api/lib/models';
import { cachedSearch } from '@zengenti/contensis-react-base/util';

import { canonicalDomain } from '~/util/canonicalDomain';
import { ComponentMetaType } from '~/types/components/meta.type';
import staticRoutes from '~/routes/staticRoutes';

import { sitemapConfig } from './sitemap.config';

export type SitemapConfig = {
  languages: string[];
  noIndexField?: string;
  priorityMap?: {
    url: string;
    priority: SitemapItem['priority'];
    changefreq?: SitemapItem['changefreq'];
  }[];
  additions: SitemapItem[] | [];
  excludeContentTypes?: string[];
  excludePaths?: string[];
};

type SitemapEntry = Entry & ComponentMetaType;

type SitemapItem = {
  url: string;
  lastmod?: string;
  priority?: 0 | 0.1 | 0.2 | 0.3 | 0.4 | 0.5 | 0.6 | 0.7 | 0.8 | 0.9 | 1;
  changefreq?:
    | 'always'
    | 'hourly'
    | 'daily'
    | 'weekly'
    | 'monthly'
    | 'yearly'
    | 'never';
};

const contensisConfig = {
  rootUrl: DELIVERY_API_CONFIG.rootUrl,
  accessToken: DELIVERY_API_CONFIG.accessToken,
  projectId: DELIVERY_API_CONFIG.projectId,
  languages: sitemapConfig.languages,
  fields: [
    'sys.contentTypeId',
    'sys.language',
    'sys.uri',
    'sys.version',
    sitemapConfig.noIndexField ? sitemapConfig.noIndexField : '',
  ],
  previewUrl: canonicalDomain,
};

const dynamicSort = (property: string) => {
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
};

const query = (pageIndex: number, pageSize: number) => {
  const { fields, languages } = contensisConfig;

  /**
   * Only return dataFormat entry, where sys.uri exists (the entry has a location/node assigned)
   */
  let query;

  if (
    sitemapConfig?.excludeContentTypes &&
    sitemapConfig.excludeContentTypes?.length > 0
  ) {
    query = new Query(
      Op.equalTo('sys.versionStatus', 'published'),
      Op.equalTo('sys.dataFormat', 'entry'),
      Op.in('sys.language', ...languages),
      Op.exists('sys.uri', true),
      Op.not(Op.in('sys.contentTypeId', ...sitemapConfig.excludeContentTypes))
    );
  } else {
    query = new Query(
      Op.equalTo('sys.versionStatus', 'published'),
      Op.equalTo('sys.dataFormat', 'entry'),
      Op.in('sys.language', ...languages),
      Op.exists('sys.uri', true)
    );
  }

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

const mapEntryToSitemapUrl = (entry: SitemapEntry): SitemapItem => {
  const { uri, version } = entry.sys;
  const existsInConfig = sitemapConfig.priorityMap?.find(
    config => config.url === entry.sys.contentTypeId
  );

  if (existsInConfig) {
    const { priority, changefreq } = existsInConfig;
    return {
      url: encodeURI(uri),
      lastmod: version?.published,
      priority,
      changefreq,
    };
  } else {
    return {
      url: encodeURI(uri),
      lastmod: version?.published,
    };
  }
};

const sitemapPathsFromStaticRoutes = (routes: StaticRoute[]): SitemapItem[] => {
  const lastmod = new Date().toISOString().split('T')[0];

  const handleParams = (string: string): string => {
    const splitColonSlash = string.split(/\/:/);
    const splitDelimiters = splitColonSlash.flatMap(part =>
      part.split(/[:?#]/)
    );

    return splitDelimiters[0];
  };

  return routes.map(route => {
    const { path } = route;
    const pathExistsInConfig = sitemapConfig.priorityMap?.find(
      config => config.url === path
    );

    if (pathExistsInConfig) {
      const { priority, changefreq } = pathExistsInConfig;
      return {
        url: encodeURI(handleParams(path)),
        lastmod,
        priority,
        changefreq,
      };
    } else {
      return {
        url: encodeURI(handleParams(path)),
        lastmod,
      };
    }
  });
};

export const generateSitemap = async (project: string) => {
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
  ] as SitemapEntry[];

  /**
   * Map entries to objects with url and lastmod props
   * Strip entries where `noIndex` is true
   */
  const mappedEntriesToUrls = entriesList
    .flatMap(e =>
      typeof e.noIndex === 'undefined' || e.noIndex === true ? e : []
    )
    .map(e => mapEntryToSitemapUrl(e));

  /**
   * Mix mapped entries with static user-defined paths
   * Filter for exclusions from sitemap config
   * Filter for duplicate URLs
   */
  const mappedUrls = [
    ...mappedEntriesToUrls,
    ...sitemapPathsFromStaticRoutes(staticRoutes),
    ...sitemapConfig.additions,
  ]
    .filter(item =>
      sitemapConfig.excludePaths?.length
        ? !sitemapConfig?.excludePaths.includes(item.url)
        : item
    )
    .filter(
      (item, index, self) => index === self.findIndex(t => t.url === item.url)
    )
    .sort(dynamicSort('url'));

  /**
   * Create sitemap stream object
   */
  const smStream = new SitemapStream({
    hostname: canonicalDomain,
    lastmodDateOnly: true,
  });

  mappedUrls.forEach(item => smStream.write(item));
  smStream.end();

  return await streamToPromise(smStream);
};

export default generateSitemap;
