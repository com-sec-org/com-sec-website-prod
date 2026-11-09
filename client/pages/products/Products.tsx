import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { ArrowRight, Shield } from "lucide-react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { availableProducts, productPath, roadmapProducts } from "./shieldProducts";

const DESCRIPTION =
  "Shield helps teams organize audit evidence, train employees, and track penetration test findings through remediation. Explore the first three Shield products and see what we're building next.";

export default function Products() {
  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Shield Products | Security & Compliance Tools | Com-Sec</title>
        <meta name="description" content={DESCRIPTION} />
        <link rel="canonical" href="https://com-sec.io/products" />
        <meta property="og:title" content="Shield Products | Com-Sec" />
        <meta property="og:description" content={DESCRIPTION} />
        <meta property="og:url" content="https://com-sec.io/products" />
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
            <div className="mb-6 inline-flex items-center rounded-full border border-orange-400/30 bg-orange-500/10 px-4 py-2 text-sm font-medium text-orange-300">
              <Shield className="mr-2 h-4 w-4" aria-hidden="true" />
              Shield Products
            </div>
            <h1 className="mb-6 text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
              Tools for the security and compliance work your team does{" "}
              <span className="bg-gradient-to-r from-orange-400 to-orange-500 bg-clip-text text-transparent">
                every day
              </span>
            </h1>
            <p className="mx-auto max-w-3xl text-lg text-white/85 sm:text-xl">{DESCRIPTION}</p>
          </div>
        </section>

        {/* Available products */}
        <section className="bg-gradient-to-br from-gray-50 via-white to-blue-50 py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="mb-12 text-center text-3xl font-bold text-primary sm:text-4xl">
              <span className="bg-gradient-to-r from-accent to-orange-600 bg-clip-text text-transparent">
                Explore
              </span>{" "}
              Shield
            </h2>
            <div className="grid gap-6 md:grid-cols-3">
              {availableProducts.map(({ name, slug, icon: Icon, page }) => (
                <Link
                  key={slug}
                  to={productPath(slug)}
                  className="group flex flex-col rounded-2xl border border-gray-100 bg-white p-6 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-orange-200 hover:shadow-2xl sm:p-8"
                >
                  {Icon && (
                    <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-accent to-orange-600 text-white">
                      <Icon className="h-6 w-6" aria-hidden="true" />
                    </div>
                  )}
                  <h3 className="mb-2 text-xl font-bold text-primary">{name}</h3>
                  <p className="mb-6 flex-grow text-base leading-relaxed text-gray-700">{page?.tagline}</p>
                  <span className="inline-flex items-center text-sm font-semibold text-accent">
                    Learn more
                    <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Roadmap */}
        <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 py-16 text-white sm:py-20">
          <div className="mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
            <h2 className="mb-4 text-3xl font-bold sm:text-4xl">
              On the{" "}
              <span className="bg-gradient-to-r from-accent to-orange-400 bg-clip-text text-transparent">
                roadmap
              </span>
            </h2>
            <p className="mb-10 text-lg text-white/80">See what we're building next.</p>
            <ul className="flex flex-wrap justify-center gap-3">
              {roadmapProducts.map((p) => (
                <li key={p.slug}>
                  {p.page ? (
                    <Link
                      to={productPath(p.slug)}
                      className="inline-block rounded-xl border border-white/30 bg-white/10 px-5 py-2.5 font-semibold transition-all duration-300 hover:scale-105 hover:border-accent/60"
                    >
                      {p.name}
                    </Link>
                  ) : (
                    <span className="inline-block rounded-xl border border-white/10 px-5 py-2.5 font-medium text-white/50">
                      {p.name}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
