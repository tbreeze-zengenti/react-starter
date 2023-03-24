import React from 'react';
import { Helmet } from 'react-helmet';
import { useSelector } from 'react-redux';

import { routing } from '@zengenti/contensis-react-base/redux';

import { getCanonicalUrl } from './getCanonicalUrl';

import { MetaProps } from './meta.types';

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
}: MetaProps) => {
  const siteTitle = 'React Starter';
  const title = siteTitle ? `${pageTitle} | ${siteTitle}` : `${pageTitle}`;

  const currentPath: string = useSelector(routing.selectors.selectCurrentPath);
  const canonicalPath: string = `${getCanonicalUrl}${currentPath}`;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />

      <meta property="og:site_name" content={siteTitle} />
      <meta property="og:url" content={canonicalPath} />
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

      <link rel="canonical" href={canonicalPath} />

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
