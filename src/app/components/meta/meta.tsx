import React from 'react';
import { Helmet } from 'react-helmet';
import { useSelector } from 'react-redux';

import { routing } from '@zengenti/contensis-react-base/redux';

export type MetaProps = {
  author?: string;
  authorTwitterHandle?: string;
  canonicalPath: string;
  description: string;
  firstName?: string;
  lastName?: string;
  locale?: string;
  ogDescription?: string;
  ogImage?: string;
  ogImageAlt?: string;
  ogType?: 'article' | 'profile' | 'website' | 'video';
  publishedDateTime?: string;
  rssFeedPath?: string;
  schema?: string;
  title: string;
  twitterCardType: 'summary' | 'summary_large_image' | 'app' | 'player';
};

export const Meta = ({
  author,
  authorTwitterHandle,
  canonicalPath,
  description,
  firstName,
  lastName,
  locale = 'en_GB',
  ogDescription,
  ogImage,
  ogImageAlt,
  ogType = 'website',
  publishedDateTime,
  rssFeedPath,
  schema,
  title,
  twitterCardType = 'summary',
}: MetaProps) => {
  const projectDomain = PUBLIC_URI.replace(/(http|https):\/\/|www\.|\/$/g, '');
  const projectUrl = 'https://www.' + projectDomain;
  console.log(projectUrl);

  const currentPath = useSelector(routing.selectors.selectCurrentPath);
  console.log(currentPath);

  /** Generate a Redux config for these */
  const siteTitle = 'React Starter';
  const siteName = 'Zengenti React Starter';
  const websiteTwitterHandle = '@zengenti';

  return (
    <Helmet>
      <title>{`${title}${siteTitle ? ` | ${siteTitle}` : ''}`}</title>
      <meta name="description" content={description} />
      {currentPath !== canonicalPath && (
        <link rel="canonical" href={`${projectUrl}${canonicalPath}`} />
      )}

      <meta property="og:site_name" content={siteName} />
      <meta property="og:url" content={`${projectUrl}${canonicalPath}`} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={ogDescription || description} />
      <meta property="og:image" content={`${projectUrl}${ogImage}`} />
      <meta property="og:image:alt" content={ogImageAlt || siteName} />
      <meta property="og:image:width" content={'1200'} />
      <meta property="og:image:height" content={'630'} />
      <meta property="og:type" content={ogType} />
      <meta property="og:locale" content={locale} />
      {ogType === 'article' && publishedDateTime && (
        <meta property="article:published_time" content={publishedDateTime} />
      )}
      {ogType === 'article' && author && (
        <meta property="article:author" content={author} />
      )}
      {ogType === 'profile' && firstName && lastName && (
        <>
          <meta property="profile:first_name" content={firstName} />
          <meta property="profile:last_name" content={lastName} />
        </>
      )}
      <meta name="twitter:card" content={twitterCardType} />
      {websiteTwitterHandle && (
        <meta name="twitter:site" content={websiteTwitterHandle} />
      )}
      {authorTwitterHandle && (
        <meta name="twitter:creator" content={authorTwitterHandle} />
      )}
      {rssFeedPath && (
        <link
          rel="alternate"
          type="application/rss+xml"
          title={`RSS Feed for ${title}`}
          href={rssFeedPath}
        />
      )}
      {schema && <script type="application/ld+json">{schema}</script>}
    </Helmet>
  );
};
