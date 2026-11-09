import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { ArrowLeft, CheckCircle, ChevronRight } from "lucide-react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import NotFound from "@/pages/NotFound";
import { availableProducts, productPath, shieldProducts } from "./shieldProducts";

const PRIMARY_BUTTON =
  "bg-gradient-to-r from-accent to-orange-600 hover:from-accent/80 hover:to-orange-500 text-white transform hover:scale-105 transition-all duration-300 text-sm sm:text-base px-6 sm:px-8 shadow-2xl whitespace-nowrap backdrop-blur-sm border border-white/10";

export default function ProductPage({ slug }: { slug: string }) {
  const product = shieldProducts.find((p) => p.slug === slug);
  if (!product?.page) return <NotFound />;

  const { name, icon: Icon, page } = product;
  const url = `https://com-sec.io${productPath(slug)}`;
  const others = availableProducts.filter((p) => p.slug !== slug);

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>{`${name}: ${page.tagline} | Com-Sec`}</title>
        <meta name="description" content={page.description} />
        <link rel="canonical" href={url} />
        <meta property="og:title" content={`${name} | Com-Sec`} />
        <meta property="og:description" content={page.description} />
        <meta property="og:url" content={url} />
        <meta property="og:type" content="website" />
      </Helmet>

      <Navigation />

      <main>
        {/* Hero */}
        <section className="relative overflow-hidden bg-gradient-to-br from-primary via-blue-900 to-blue-800 pt-28 pb-20 text-white sm:pt-32 sm:pb-24">
          <div className="absolute inset-0 hidden lg:block" aria-hidden="true">
            <div className="absolute top-20 left-10 h-32 w-32 rounded-full bg-white/5" />
            <div className="absolute bottom-10 right-20 h-24 w-24 rounded-full bg-white/5" />
          </div>

          <div className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
            <Link
              to="/products"
              className="group mb-8 inline-flex items-center text-sm text-white/70 transition-colors hover:text-white"
            >
              <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" aria-hidden="true" />
              All Shield products
            </Link>

            <div className="mb-6 flex flex-wrap items-center justify-center gap-3">
              <div className="inline-flex items-center rounded-full border border-orange-400/30 bg-orange-500/10 px-4 py-2 text-sm font-medium text-orange-300">
                {Icon && <Icon className="mr-2 h-4 w-4" aria-hidden="true" />}
                {name}
              </div>
              {page.statusLabel && (
                <span className="rounded-full border border-white/30 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white/80">
                  {page.statusLabel}
                </span>
              )}
            </div>

            <h1 className="mb-6 text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
              {page.tagline}
            </h1>
            <p className="mx-auto mb-10 max-w-3xl text-lg text-white/85 sm:text-xl">
              {page.description}
            </p>

            <Button size="lg" className={PRIMARY_BUTTON} asChild>
              <Link to="/contact" className="flex items-center gap-2">
                {page.cta}
                <ChevronRight className="h-4 w-4 flex-shrink-0 sm:h-5 sm:w-5" aria-hidden="true" />
              </Link>
            </Button>
          </div>
        </section>

        {/* Features */}
        {page.features && (
          <section className="bg-gradient-to-br from-gray-50 via-white to-blue-50 py-16 sm:py-20">
            <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
              <h2 className="mb-12 text-center text-3xl font-bold text-primary sm:text-4xl">
                What you can do with{" "}
                <span className="bg-gradient-to-r from-accent to-orange-600 bg-clip-text text-transparent">
                  {name}
                </span>
              </h2>
              <ul className="grid gap-6 md:grid-cols-3">
                {page.features.map((feature) => (
                  <li
                    key={feature}
                    className="rounded-2xl border border-gray-100 bg-white p-6 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-orange-200 hover:shadow-xl sm:p-8"
                  >
                    <CheckCircle className="mb-4 h-7 w-7 text-accent" aria-hidden="true" />
                    <p className="text-base leading-relaxed text-gray-700">{feature}</p>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        )}

        {/* Other products */}
        <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 py-16 text-white sm:py-20">
          <div className="mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
            <h2 className="mb-8 text-2xl font-bold sm:text-3xl">Explore other Shield products</h2>
            <div className="flex flex-wrap justify-center gap-4">
              {others.map((p) => (
                <Link
                  key={p.slug}
                  to={productPath(p.slug)}
                  className="rounded-xl border border-white/20 bg-white/10 px-6 py-3 font-semibold backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:border-accent/50"
                >
                  {p.name}
                </Link>
              ))}
              <Link
                to="/products"
                className="rounded-xl border border-white/20 px-6 py-3 font-semibold text-orange-300 transition-colors hover:text-orange-200"
              >
                View all products
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
