import React from 'react';
import { Helmet } from 'react-helmet';
import { useSelector } from 'react-redux';

import {
  selectCopyright,
  selectSiteLogo,
  selectSocialMedia,
} from '~/redux/siteConfig/selectors';

import { MetaProps } from './meta.types';

import { canonicalPath } from './canonicalPath';

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
  schema,
  twitterCardType = 'summary',
}: MetaProps) => {
  /**
   *  Selects our SiteTitle & SiteName from SiteConfig state
   *  Generates a title based on whether a SiteTitle has been set
   */
  const siteTitle = useSelector(selectCopyright);
  const siteName = useSelector(selectCopyright);
  const title = siteTitle ? `${pageTitle}  | ${siteTitle}` : `${pageTitle}`;

  /**
   * Selects our Twitter URL from SiteConfig state
   * Removes the handle id from the URL
   */
  const selectWebsiteTwitterHandle = useSelector(selectSocialMedia);
  const websiteTwitterHandle = selectWebsiteTwitterHandle?.twitter?.match(
    /^https?:\/\/(?:www\.)?twitter\.com\/(?:#!\/)?@?([^/?#]*)(?:[?#].*)?$/
  )[1];

  /**
   * Selects our logo object from SiteConfig state
   */
  const selectLogo = useSelector(selectSiteLogo);

  ogImage = selectLogo?.logo;
  ogImageAltText = selectLogo?.altText;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />

      {/**
       * Open Graph Protocol
       * @link https://ogp.me/
       */}
      <meta property="og:site_name" content={siteName} />
      <meta property="og:url" content={canonicalPath} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={ogDescription || description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:alt" content={ogImageAltText} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:type" content={ogType} />
      <meta property="og:locale" content={locale} />

      {/**
       * Twitter Cards
       * @link https://developer.twitter.com/en/docs/twitter-for-websites/cards/guides/getting-started
       */}
      <meta name="twitter:card" content={twitterCardType} />
      <meta name="twitter:site" content={websiteTwitterHandle} />
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

      {schema ? <script type="application/ld+json">{schema}</script> : null}
    </Helmet>
  );
};

export default Meta;
