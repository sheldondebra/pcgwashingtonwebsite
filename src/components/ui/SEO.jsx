import React from "react";
import { Helmet } from "react-helmet-async";

const SEO = ({ title, description, keywords, image, url }) => {
  const siteTitle = "Presbyterian Church of Ghana – Washington DC North District";
  const fullTitle = title ? `${title} | ${siteTitle}` : siteTitle;
  const defaultDescription = "Presbyterian Church of Ghana – Washington DC North District is a united body of congregations committed to Christ-centered worship, spiritual growth, and community impact.";
  const metaDescription = description || defaultDescription;
  const siteUrl = "https://pcgwashington.org/"; // Replace with actual URL
  const metaUrl = url ? `${siteUrl}${url}` : siteUrl;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={metaDescription} />
      {keywords && <meta name="keywords" content={keywords} />}

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={metaUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={metaDescription} />
      {image && <meta property="og:image" content={image} />}

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={metaUrl} />
      <meta property="twitter:title" content={fullTitle} />
      <meta property="twitter:description" content={metaDescription} />
      {image && <meta property="twitter:image" content={image} />}
    </Helmet>
  );
};

export default SEO;
