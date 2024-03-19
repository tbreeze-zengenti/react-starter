import React from 'react';
import { Helmet } from 'react-helmet';
import { useSelector } from 'react-redux';

import { routing } from '@zengenti/contensis-react-base/redux';
import { AppState } from '@zengenti/contensis-react-base/models/redux/appstate';

import { canonicalDomain } from './canonicalDomain';

export type MetaProps = {
  pageTitle: string; // The title of the page.
  author?: string; // The author of the page.
  authorTwitterHandle?: string; // The Twitter handle of the author.
  description?: string; // The description of the page.
  locale?: string; // The locale of the page, eg. en_GB
  ogDescription?: string; // The Open Graph description for the page.
  ogImage?: string; // The URL of the Open Graph image.
  ogImageAltText?: string; // The alt text for the Open Graph image.
  ogType?: 'article' | 'profile' | 'website' | 'video'; // The type of the Open Graph content.
  publishedDateTime?: string;
  rssFeedPath?: string; // The path to the RSS feed.
  schema?: string; // The schema of the page.
  twitterCardType?: 'summary' | 'summary_large_image' | 'app' | 'player'; // The type of the Twitter card.
  twitterHandle?: string; // The Twitter handle of the site.
  insytful?: boolean; // Determines whether to include Insytful metadata.
  noIndex?: boolean; // Determines whether to set the noindex meta tag.
  noFollow?: boolean; // Determines whether to set the nofollow meta tag.
};

/**
 * A component for managing metadata for the page.
 */
const Meta = ({
  authorTwitterHandle,
  description,
  locale = 'en_GB',
  ogDescription,
  ogImage,
  ogImageAltText,
  ogType = 'website',
  pageTitle,
  rssFeedPath,
  twitterCardType = 'summary',
  twitterHandle,
  insytful = true,
  noIndex = false,
  noFollow = false,
}: MetaProps) => {
  const projectId = useSelector<AppState, string>(
    routing.selectors.selectCurrentProject
  );
  const entryId = useSelector<AppState, string>(
    routing.selectors.selectRouteEntryEntryId
  );
  const canonicalPath = useSelector<AppState, string>(
    routing.selectors.selectCanonicalPath
  );

  const siteTitle = 'React Starter';
  const title = siteTitle ? `${pageTitle} | ${siteTitle}` : `${pageTitle}`;
  const canonical = `${canonicalDomain}${canonicalPath}`;

  return (
    <Helmet>
      <title>{title}</title>
      {noIndex ? <meta name="robots" content="noindex" /> : null}
      {noFollow ? <meta name="robots" content="nofollow" /> : null}
      <meta name="description" content={description} />
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
      {canonicalPath ? <link rel="canonical" href={canonical} /> : null}

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
