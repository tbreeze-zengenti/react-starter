import React from 'react';
import { Helmet } from 'react-helmet';
import { useSelector } from 'react-redux';

import { routing } from '@zengenti/contensis-react-base/redux';
import type { AppState } from '@zengenti/contensis-react-base/models';

import { canonicalDomain } from './canonicalDomain';

/**
 * @property {pageTitle} - The title of the page.
 * @property {description} - The description of the page.
 * @property {locale} - The locale of the page, e.g. en_GB
 *
 * @property {ogDescription} - The Open Graph description for the page.
 * @property {ogImage} - The URL of the Open Graph image.
 * @property {ogImageAltText} - The alt text for the Open Graph image.
 * @property {ogType} - The type of the Open Graph content.
 *
 * @property {twitterCardType} - The type of the Twitter card.
 * @property {twitterHandle} - The Twitter handle of the site.
 * @property {authorTwitterHandle} - The Twitter handle of the author.
 *
 * @property {insytful} - Determines whether to include Insytful metadata.
 * @property {noIndex} - Determines whether to set the noindex meta tag.
 * @property {noFollow} -  Determines whether to set the nofollow meta tag.
 *
 * @property {rssFeedPath} - The path to the RSS feed.
 */
export type MetaProps = {
  pageTitle: string;
  description?: string;
  locale?: string;

  ogDescription?: string;
  ogImage?: string;
  ogImageAltText?: string;
  ogType?: 'article' | 'profile' | 'website' | 'video';

  twitterCardType?: 'summary' | 'summary_large_image' | 'app' | 'player';
  twitterHandle?: string;
  authorTwitterHandle?: string;

  insytful?: boolean;
  noIndex?: boolean;
  noFollow?: boolean;

  rssFeedPath?: string;
};

/**
 * A component for managing metadata for the page.
 */
const Meta = ({
  pageTitle,
  description,
  locale = 'en_GB',

  ogDescription,
  ogImage,
  ogImageAltText,
  ogType = 'website',

  twitterCardType = 'summary',
  twitterHandle,
  authorTwitterHandle,

  insytful = true,
  noIndex = false,
  noFollow = false,

  rssFeedPath,
}: MetaProps) => {
  const { selectCurrentProject, selectRouteEntryEntryId, selectCanonicalPath } =
    routing.selectors;
  const projectId = useSelector<AppState, string>(selectCurrentProject);
  const entryId = useSelector<AppState, string>(selectRouteEntryEntryId);
  const canonicalPath = useSelector<AppState, string>(selectCanonicalPath);

  const siteTitle = 'React Starter';
  const title = siteTitle ? `${pageTitle} | ${siteTitle}` : pageTitle;
  const canonical = `${canonicalDomain}${canonicalPath}`;

  return (
    <Helmet>
      <title>{title}</title>
      {noIndex ? <meta name="robots" content="noindex" /> : null}
      {noFollow ? <meta name="robots" content="nofollow" /> : null}
      <meta name="description" content={description} />
      {canonicalPath ? <link rel="canonical" href={canonical} /> : null}

      <meta property="og:site_name" content={siteTitle} />
      {canonicalPath ? <meta property="og:url" content={canonical} /> : null}
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={ogDescription || description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:alt" content={ogImageAltText} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:type" content={ogType} />
      <meta property="og:locale" content={locale} />

      <meta name="twitter:card" content={twitterCardType} />
      {twitterHandle ? (
        <meta name="twitter:site" content={twitterHandle} />
      ) : null}
      {authorTwitterHandle ? (
        <meta name="twitter:creator" content={authorTwitterHandle} />
      ) : null}
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:image:alt" content={ogImageAltText} />

      {insytful && projectId ? (
        <meta name="IDL:ProjectId" content={projectId} />
      ) : null}
      {insytful && entryId ? (
        <meta name="IDL:EntryId" content={entryId} />
      ) : null}

      {rssFeedPath ? (
        <link
          rel="alternate"
          type="application/rss+xml"
          title={`RSS Feed for ${siteTitle}`}
          href={rssFeedPath}
        />
      ) : null}
    </Helmet>
  );
};

export default Meta;
