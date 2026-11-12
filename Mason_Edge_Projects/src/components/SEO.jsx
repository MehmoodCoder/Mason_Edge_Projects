function SEO({
  title,
  description,
  path = "/",
  image = "/logo.png",
  noindex = false,
}) {
  const siteUrl = "https://mason-edge-projects.vercel.app";
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  const canonicalUrl = `${siteUrl}${cleanPath === "/" ? "" : cleanPath}`;
  const ogImage = image.startsWith("http") ? image : `${siteUrl}${image}`;

  const fullTitle = title
    ? `${title} | Mason Edge Projects`
    : "Mason Edge Projects | Built on Experience. Driven by Better.";

  return (
    <>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />
      <meta
        name="robots"
        content={noindex ? "noindex, nofollow" : "index, follow"}
      />

      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={ogImage} />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
    </>
  );
}

export default SEO;