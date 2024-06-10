import React from 'react';
import { Helmet } from 'react-helmet';
import { useSelector } from 'react-redux';
import { routing } from '@zengenti/contensis-react-base/redux';
import { canonicalDomain } from './canonicalDomain';
import type { AppState } from '@zengenti/contensis-react-base/models/redux/appstate';

export type MetaProps = {
  pageTitle: string; // The title of the page.
  description?: string; // The description of the page.
  locale?: string; // The locale of the page, e.g. en_GB

  ogDescription?: string; // The Open Graph description for the page.
  ogImage?: string; // The URL of the Open Graph image.
  ogImageAltText?: string; // The alt text for the Open Graph image.
  ogType?: 'article' | 'profile' | 'website' | 'video'; // The type of the Open Graph content.

  twitterCardType?: 'summary' | 'summary_large_image' | 'app' | 'player'; // The type of the Twitter card.
  twitterHandle?: string; // The Twitter handle of the site.
  authorTwitterHandle?: string; // The Twitter handle of the author.

  insytful?: boolean; // Determines whether to include Insytful metadata.
  noIndex?: boolean; // Determines whether to set the noindex meta tag.
  noFollow?: boolean; // Determines whether to set the nofollow meta tag.

  rssFeedPath?: string; // The path to the RSS feed.
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
