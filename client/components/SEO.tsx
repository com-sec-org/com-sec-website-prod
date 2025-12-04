import { Helmet } from "react-helmet";

export default function SEO({ data }) {
  if (!data) return null;

  const {
    title,
    description,
    canonical,
    keywords,
    image,
    url,
    schema,
  } = data;

  return (
    <Helmet>
      {title && <title>{title}</title>}
      {description && <meta name="description" content={description} />}
      {canonical && <link rel="canonical" href={canonical} />}

      {keywords && (
        <meta name="keywords" content={keywords.join(", ")} />
      )}

      {title && <meta property="og:title" content={title} />}
      {description && (
        <meta property="og:description" content={description} />
      )}
      {image && <meta property="og:image" content={image} />}
      {url && <meta property="og:url" content={url} />}

      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      )}
    </Helmet>
  );
}
