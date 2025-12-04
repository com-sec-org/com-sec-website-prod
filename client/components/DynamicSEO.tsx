import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet";
import { SEO_CONFIG, generateBreadcrumbs } from "./seo.config";

export default function DynamicSEO() {
  const { pathname } = useLocation();

  // Find SEO entry for the current path
  const seo = SEO_CONFIG[pathname];

  // If no entry exists → return nothing
  if (!seo) return null;

  const {
    title,
    description,
    canonical,
    keywords,
    image,
    faq,
    type = "website"
  } = seo;

  // Breadcrumb schema
  const breadcrumbSchema = generateBreadcrumbs(pathname);

  // Article schema (blogs only)
  const isArticle = type === "article";

  const articleSchema = isArticle
    ? {
        "@context": "https://schema.org",
        "@type": "Article",
        headline: title,
        description,
        image,
        mainEntityOfPage: canonical,
        author: "Com-Sec"
      }
    : null;

    return null; // 👈 FIX
}
    // <Helmet>
    //   {/* Title */}
    //   <title>{title}</title>

    //   {/* Meta Description */}
    //   <meta name="description" content={description} />

    //   {/* Keywords */}
    //   {keywords?.length > 0 && (
    //     <meta name="keywords" content={keywords.join(", ")} />
    //   )}

    //   {/* Canonical */}
    //   <link rel="canonical" href={canonical} />

    //   {/* OpenGraph */}
    //   <meta property="og:title" content={title} />
    //   <meta property="og:description" content={description} />
    //   <meta property="og:url" content={canonical} />
    //   <meta property="og:image" content={image} />
    //   <meta property="og:type" content={isArticle ? "article" : "website"} />

    //   {/* Twitter */}
    //   <meta name="twitter:card" content="summary_large_image" />
    //   <meta name="twitter:title" content={title} />
    //   <meta name="twitter:description" content={description} />
    //   <meta name="twitter:image" content={image} />

    //   {/* Breadcrumb Schema */}
    //   <script type="application/ld+json">
    //     {JSON.stringify(breadcrumbSchema)}
    //   </script>

    //   {/* FAQ Schema */}
    //   {faq && (
    //     <script type="application/ld+json">{JSON.stringify(faq)}</script>
    //   )}

    //   {/* Article Schema */}
    //   {isArticle && (
    //     <script type="application/ld+json">
    //       {JSON.stringify(articleSchema)}
    //     </script>
    //   )}
    // </Helmet>

