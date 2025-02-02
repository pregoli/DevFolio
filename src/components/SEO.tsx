import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  article?: boolean;
  pathname?: string;
}

export function SEO({ 
  title, 
  description = "DEV~FOLIO - A blog about software development, architecture, and best practices",
  image = "/logo512.png",
  article = false,
  pathname = ""
}: SEOProps) {
  const siteUrl = window.location.origin;
  const defaultTitle = "DEV~FOLIO - Software Development Blog";
  const fullTitle = title ? `${title} | ${defaultTitle}` : defaultTitle;
  const canonicalUrl = `${siteUrl}${pathname}`;
  const imageUrl = `${siteUrl}${image}`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:type" content={article ? "article" : "website"} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />
    </Helmet>
  );
}