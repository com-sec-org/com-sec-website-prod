import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { ArrowRight, CheckCircle2, ChevronRight, ShieldCheck } from "lucide-react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import type { ServicePageContent } from "./types";
import { AnchoredSections } from "./AnchoredSections";

// Shared layout for Services menu pages. Styling follows the Shield GRC page
// (client/pages/products/ShieldGrc.tsx); content lives in client/data/servicePages/.

const SITE_URL = "https://com-sec.io";
const OG_IMAGE = `${SITE_URL}/images/logo/com-sec_logo.png`;
// The existing book-a-call flow: /contact holds the form and the Calendly link.
export const BOOK_CALL_HREF = "/contact";

const PRIMARY_CTA =
  "inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-accent to-orange-600 px-6 py-3 text-sm font-semibold text-white shadow-2xl transition-all duration-300 hover:scale-105 hover:from-orange-500 hover:to-orange-600 sm:px-8 sm:text-base";
const SECONDARY_CTA =
  "inline-flex items-center justify-center gap-2 rounded-xl border border-white/30 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:border-accent/60 sm:px-8 sm:text-base";
const CARD =
  "rounded-2xl border border-gray-100 bg-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-orange-200 hover:shadow-xl";
const SOFT_BG = "bg-gradient-to-br from-gray-50 via-white to-blue-50";

function SectionHeading({ eyebrow, title, description }: { eyebrow?: string; title: string; description?: string }) {
  return (
    <div className="mx-auto mb-12 max-w-3xl text-center">
      {eyebrow && <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-accent">{eyebrow}</p>}
      <h2 className="mb-4 text-3xl font-bold leading-tight text-primary sm:text-4xl">{title}</h2>
      {description && <p className="text-lg leading-relaxed text-gray-700">{description}</p>}
    </div>
  );
}

function Container({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <div className={`mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ${className}`}>{children}</div>;
}

export function ServicePage({ content }: { content: ServicePageContent }) {
  const { seo, hero, overview, audiences, inclusions, approaches, structure, phases, ongoing, sections, platforms, why, related, faqs, cta } =
    content;
  const pageUrl = `${SITE_URL}${content.path}`;

  const schemas: object[] = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "@id": `${pageUrl}#service`,
      name: seo.serviceName,
      description: seo.description,
      url: pageUrl,
      areaServed: "Worldwide",
      provider: { "@type": "Organization", name: "Com-Sec", url: `${SITE_URL}/` },
    },
  ];
  if (faqs?.length) {
    schemas.push({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map(({ q, a }) => ({
        "@type": "Question",
        name: q,
        acceptedAnswer: { "@type": "Answer", text: a },
      })),
    });
  }

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>{seo.title}</title>
        <meta name="description" content={seo.description} />
        {seo.keywords && <meta name="keywords" content={seo.keywords} />}
        <link rel="canonical" href={pageUrl} />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content={seo.ogTitle} />
        <meta property="og:description" content={seo.description} />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:image" content={OG_IMAGE} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Com-Sec" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={seo.ogTitle} />
        <meta name="twitter:description" content={seo.description} />
        <meta name="twitter:image" content={OG_IMAGE} />
        {schemas.map((schema, i) => (
          <script key={i} type="application/ld+json">
            {JSON.stringify(schema)}
          </script>
        ))}
      </Helmet>

      <Navigation />

      <main>
        {/* Hero */}
        <section className="relative isolate overflow-hidden bg-primary pt-28 pb-16 text-white sm:pt-32 lg:pb-24">
          <div className="absolute inset-0 -z-10 bg-gradient-to-br from-slate-950 via-primary to-blue-900" aria-hidden="true" />
          <div
            className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:56px_56px] [mask-image:radial-gradient(ellipse_at_top_right,black,transparent_70%)]"
            aria-hidden="true"
          />
          <div className="absolute -top-40 right-0 -z-10 h-[36rem] w-[36rem] rounded-full bg-orange-500/20 blur-3xl" aria-hidden="true" />
          <div className="absolute -bottom-32 left-1/4 -z-10 h-96 w-[40rem] rounded-full bg-orange-600/10 blur-3xl" aria-hidden="true" />

          <Container className="relative grid items-center gap-12 lg:grid-cols-12 lg:gap-10">
            <div className="text-center lg:col-span-7 lg:text-left">
              <div className="mb-6 inline-flex items-center rounded-full border border-orange-400/30 bg-orange-500/10 px-4 py-2 text-sm font-medium text-orange-300">
                <ShieldCheck className="mr-2 h-4 w-4" aria-hidden="true" />
                {hero.eyebrow}
              </div>
              <h1 className="mb-6 text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl">
                {hero.title}{" "}
                <span className="bg-gradient-to-r from-orange-400 to-orange-500 bg-clip-text text-transparent">
                  {hero.highlight}
                </span>
              </h1>
              <p className="mx-auto mb-8 max-w-2xl text-lg leading-relaxed text-white/80 sm:text-xl lg:mx-0">
                {hero.description}
              </p>
              {hero.tags && (
                <ul className="mb-10 flex flex-wrap justify-center gap-2 lg:justify-start">
                  {hero.tags.map((tag) => (
                    <li
                      key={tag}
                      className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-medium text-white/80"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
              )}
              <div className="flex flex-col items-center justify-center gap-4 sm:flex-row lg:justify-start">
                <Link to={BOOK_CALL_HREF} className={PRIMARY_CTA}>
                  Book a Call
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
                {(inclusions || phases) && (
                  <a href={inclusions ? "#whats-included" : "#how-it-works"} className={SECONDARY_CTA}>
                    See What's Included
                  </a>
                )}
              </div>
            </div>

            <div className="relative lg:col-span-5">
              <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-orange-500/15 blur-3xl" aria-hidden="true" />
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm sm:p-8">
                <p className="mb-6 text-sm font-semibold uppercase tracking-wider text-orange-300">{hero.panel.title}</p>
                {hero.panel.checklist && (
                  <ul className="space-y-3">
                    {hero.panel.checklist.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-sm leading-relaxed text-white/85 sm:text-base">
                        <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-orange-400" aria-hidden="true" />
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
                {hero.panel.stats && (
                <dl className="grid grid-cols-2 gap-4">
                  {hero.panel.stats.map(({ value, label }) => (
                    <div key={label} className="rounded-xl border border-white/10 bg-slate-950/30 p-4">
                      <dt className="sr-only">{label}</dt>
                      <dd>
                        <span className="block text-2xl font-bold text-white sm:text-3xl">{value}</span>
                        <span className="mt-1 block text-xs leading-snug text-white/70 sm:text-sm">{label}</span>
                      </dd>
                    </div>
                  ))}
                </dl>
                )}
                {hero.panel.footnote && (
                  <p className="mt-5 text-xs leading-relaxed text-white/60">{hero.panel.footnote}</p>
                )}
              </div>
            </div>
          </Container>
        </section>

        {/* Overview */}
        {overview && (
          <section className="bg-white py-16 sm:py-24">
            <Container className="grid items-start gap-12 lg:grid-cols-5 lg:gap-16">
              <div className="lg:col-span-3">
                {overview.eyebrow && (
                  <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-accent">{overview.eyebrow}</p>
                )}
                <h2 className="mb-6 text-3xl font-bold leading-tight text-primary sm:text-4xl">{overview.title}</h2>
                {overview.paragraphs.map((p) => (
                  <p key={p} className="mb-4 text-lg leading-relaxed text-gray-700 last:mb-0">
                    {p}
                  </p>
                ))}
              </div>
              {overview.callout && (
                <aside className="rounded-2xl border-l-4 border-accent bg-orange-50/60 p-6 sm:p-8 lg:col-span-2">
                  <h3 className="mb-3 text-lg font-bold text-primary">{overview.callout.title}</h3>
                  <p className="leading-relaxed text-gray-700">{overview.callout.body}</p>
                </aside>
              )}
            </Container>
          </section>
        )}

        {/* Who it's for */}
        {audiences && (
          <section className={`${SOFT_BG} py-16 sm:py-24`}>
            <Container>
              <SectionHeading eyebrow={audiences.eyebrow} title={audiences.title} description={audiences.description} />
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {audiences.items.map(({ icon: Icon, title, body }) => (
                  <div key={title} className={`${CARD} p-6`}>
                    <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-accent/10 text-accent">
                      <Icon className="h-6 w-6" aria-hidden="true" />
                    </div>
                    <h3 className="mb-2 text-lg font-bold text-primary">{title}</h3>
                    <p className="text-sm leading-relaxed text-gray-700">{body}</p>
                  </div>
                ))}
              </div>
            </Container>
          </section>
        )}

        {/* What's included */}
        {inclusions && (
          <section id="whats-included" className="scroll-mt-24 bg-white py-16 sm:py-24">
            <Container>
              <SectionHeading eyebrow={inclusions.eyebrow} title={inclusions.title} description={inclusions.description} />
              <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                {inclusions.items.map(({ icon: Icon, title, body }) => (
                  <li key={title} className={`${CARD} flex flex-col p-6`}>
                    <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-r from-accent to-orange-600 text-white">
                      <Icon className="h-6 w-6" aria-hidden="true" />
                    </div>
                    <h3 className="mb-2 text-lg font-bold text-primary">{title}</h3>
                    <p className="text-sm leading-relaxed text-gray-700">{body}</p>
                  </li>
                ))}
              </ul>
            </Container>
          </section>
        )}

        {/* Approaches (e.g. black, gray and white box testing) */}
        {approaches && (
          <section className={`${SOFT_BG} py-16 sm:py-24`}>
            <Container>
              <SectionHeading eyebrow={approaches.eyebrow} title={approaches.title} description={approaches.description} />
              <div className="grid gap-6 md:grid-cols-3">
                {approaches.items.map(({ icon: Icon, title, body, points, recommended }) => (
                  <div
                    key={title}
                    className={`${CARD} relative flex flex-col p-6 sm:p-8 ${recommended ? "border-orange-300 ring-2 ring-orange-200" : ""}`}
                  >
                    {recommended && (
                      <span className="absolute -top-3 left-6 rounded-full bg-gradient-to-r from-accent to-orange-600 px-3 py-1 text-xs font-semibold text-white">
                        Recommended
                      </span>
                    )}
                    <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/5 text-primary">
                      <Icon className="h-6 w-6" aria-hidden="true" />
                    </div>
                    <h3 className="mb-2 text-xl font-bold text-primary">{title}</h3>
                    <p className="mb-5 text-sm leading-relaxed text-gray-700">{body}</p>
                    <ul className="mt-auto space-y-2 border-t border-gray-100 pt-4">
                      {points.map((point) => (
                        <li key={point} className="flex items-start gap-2 text-sm text-gray-700">
                          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
              {approaches.note && (
                <p className="mx-auto mt-8 max-w-3xl text-center text-sm leading-relaxed text-gray-600">{approaches.note}</p>
              )}
            </Container>
          </section>
        )}

        {/* Framework structure */}
        {structure && (
          <section className="relative isolate overflow-hidden bg-slate-950 py-16 text-white sm:py-24">
            <div className="absolute -top-32 left-0 -z-10 h-96 w-96 rounded-full bg-orange-500/10 blur-3xl" aria-hidden="true" />
            <Container>
              <div className="mx-auto mb-12 max-w-3xl text-center">
                {structure.eyebrow && (
                  <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-orange-300">{structure.eyebrow}</p>
                )}
                <h2 className="mb-4 text-3xl font-bold leading-tight sm:text-4xl">{structure.title}</h2>
                {structure.description && <p className="text-lg leading-relaxed text-white/75">{structure.description}</p>}
              </div>
              <div className="grid gap-6 lg:grid-cols-2">
                {structure.columns.map((col) => (
                  <div key={col.heading} className="rounded-2xl border border-white/10 bg-white/5 p-6 sm:p-8">
                    <h3 className="text-xl font-bold">{col.heading}</h3>
                    {col.caption && <p className="mt-1 text-sm text-white/60">{col.caption}</p>}
                    <ul className="mt-6 space-y-3">
                      {col.items.map(({ code, label }) => (
                        <li key={code} className="flex items-start gap-3">
                          <span className="mt-0.5 inline-flex min-w-[3.25rem] shrink-0 justify-center rounded-md bg-accent/15 px-2 py-1 text-xs font-bold text-orange-300">
                            {code}
                          </span>
                          <span className="text-sm leading-relaxed text-white/85 sm:text-base">{label}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </Container>
          </section>
        )}

        {/* How the engagement runs */}
        {phases && (
          <section id="how-it-works" className={`scroll-mt-24 ${SOFT_BG} py-16 sm:py-24`}>
            <Container>
              <SectionHeading eyebrow={phases.eyebrow} title={phases.title} description={phases.description} />
              <ol className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                {phases.steps.map(({ title, timing, body, points }, i) => (
                  <li key={title} className={`${CARD} relative flex flex-col p-6`}>
                    <div className="mb-5 flex items-center justify-between gap-3">
                      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-accent to-orange-600 text-sm font-bold text-white">
                        {i + 1}
                      </span>
                      {timing && (
                        <span className="rounded-full bg-primary/5 px-3 py-1 text-xs font-semibold text-primary">
                          {timing}
                        </span>
                      )}
                    </div>
                    <h3 className="mb-2 text-lg font-bold text-primary">{title}</h3>
                    <p className="mb-4 text-sm leading-relaxed text-gray-700">{body}</p>
                    <ul className="mt-auto space-y-2 border-t border-gray-100 pt-4">
                      {points.map((point) => (
                        <li key={point} className="flex items-start gap-2 text-sm text-gray-700">
                          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                          {point}
                        </li>
                      ))}
                    </ul>
                    {i < phases.steps.length - 1 && (
                      <ChevronRight
                        className="absolute -right-5 top-10 hidden h-6 w-6 text-accent lg:block"
                        aria-hidden="true"
                      />
                    )}
                  </li>
                ))}
              </ol>
            </Container>
          </section>
        )}

        {/* After certification */}
        {ongoing && (
          <section className="bg-white py-16 sm:py-24">
            <Container className="grid items-start gap-8 lg:grid-cols-2 lg:gap-12">
              <div className="rounded-2xl bg-gradient-to-br from-primary via-blue-900 to-slate-900 p-8 text-white shadow-xl sm:p-10">
                {ongoing.eyebrow && (
                  <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-orange-300">{ongoing.eyebrow}</p>
                )}
                <h2 className="mb-4 text-2xl font-bold leading-tight sm:text-3xl">{ongoing.title}</h2>
                <p className="mb-6 leading-relaxed text-white/80">{ongoing.description}</p>
                <ul className="space-y-3">
                  {ongoing.items.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-white/90">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent text-xs font-bold text-white">
                        +
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              {ongoing.aside && (
                <div className="rounded-2xl border border-orange-200 bg-orange-50/50 p-8 sm:p-10">
                  <h3 className="mb-3 text-2xl font-bold text-primary">{ongoing.aside.title}</h3>
                  <p className="mb-6 leading-relaxed text-gray-700">{ongoing.aside.body}</p>
                  <ul className="space-y-3">
                    {ongoing.aside.points.map((point) => (
                      <li key={point} className="flex items-start gap-3 text-gray-800">
                        <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent" aria-hidden="true" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </Container>
          </section>
        )}

        {/* Anchored sections */}
        {sections && <AnchoredSections sections={sections} />}

        {/* Platforms + why Com-Sec */}
        {(platforms || why) && (
          <section className={`${SOFT_BG} py-16 sm:py-24`}>
            <Container>
              {platforms && (
                <div className="mx-auto mb-16 max-w-4xl rounded-2xl border border-gray-100 bg-white p-8 text-center shadow-lg sm:p-10">
                  <h2 className="mb-3 text-2xl font-bold text-primary sm:text-3xl">{platforms.title}</h2>
                  <p className="mx-auto mb-6 max-w-2xl leading-relaxed text-gray-700">{platforms.description}</p>
                  <ul className="flex flex-wrap justify-center gap-2">
                    {platforms.names.map((name) => (
                      <li key={name} className="rounded-full bg-primary/5 px-4 py-1.5 text-sm font-semibold text-primary">
                        {name}
                      </li>
                    ))}
                  </ul>
                  {platforms.shieldNote && (
                    <p className="mt-6 text-sm text-gray-600">
                      {platforms.shieldNote}{" "}
                      <Link to="/products/shield-grc" className="font-semibold text-accent hover:underline">
                        Explore Shield GRC
                      </Link>
                    </p>
                  )}
                </div>
              )}
              {why && (
                <>
                  <SectionHeading eyebrow="Why Com-Sec" title="A Team That Does the Heavy Lifting" />
                  <ul className="grid gap-6 md:grid-cols-3">
                    {why.map(({ icon: Icon, title, body }) => (
                      <li key={title} className={`${CARD} flex gap-4 p-6`}>
                        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent">
                          <Icon className="h-5 w-5" aria-hidden="true" />
                        </span>
                        <div>
                          <h3 className="mb-1 font-bold text-primary">{title}</h3>
                          <p className="text-sm leading-relaxed text-gray-700">{body}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </>
              )}
            </Container>
          </section>
        )}

        {/* FAQ */}
        {faqs && faqs.length > 0 && (
          <section className="bg-white py-16 sm:py-24">
            <Container className="max-w-3xl">
              <SectionHeading eyebrow="FAQ" title="Frequently Asked Questions" />
              <Accordion type="single" collapsible className="rounded-2xl border border-gray-100 bg-white px-6 shadow-lg">
                {faqs.map(({ q, a }, i) => (
                  <AccordionItem key={q} value={`faq-${i}`} className="last:border-b-0">
                    <AccordionTrigger className="text-left text-base font-semibold text-primary hover:text-accent hover:no-underline">
                      {q}
                    </AccordionTrigger>
                    <AccordionContent className="text-base leading-relaxed text-gray-700">{a}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </Container>
          </section>
        )}

        {/* Related services */}
        {related && related.length > 0 && (
          <section className={`${SOFT_BG} py-16 sm:py-20`}>
            <Container>
              <SectionHeading eyebrow="Related" title="Pairs Well With" />
              <div className="grid gap-6 md:grid-cols-3">
                {related.map(({ label, to, body }) => (
                  <Link key={to} to={to} className={`${CARD} group block p-6`}>
                    <h3 className="mb-2 flex items-center justify-between text-lg font-bold text-primary group-hover:text-accent">
                      {label}
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                    </h3>
                    <p className="text-sm leading-relaxed text-gray-700">{body}</p>
                  </Link>
                ))}
              </div>
            </Container>
          </section>
        )}

        {/* Final CTA */}
        <section className="relative overflow-hidden bg-gradient-to-br from-primary via-blue-900 to-slate-900 py-20 text-white sm:py-28">
          <div className="absolute -bottom-24 right-0 h-96 w-96 rounded-full bg-orange-500/20 blur-3xl" aria-hidden="true" />
          <div className="relative z-10 mx-auto max-w-3xl px-4 text-center sm:px-6">
            <h2 className="mb-6 text-3xl font-bold leading-tight sm:text-4xl">
              {cta.title}{" "}
              <span className="bg-gradient-to-r from-orange-400 to-orange-500 bg-clip-text text-transparent">
                {cta.highlight}
              </span>
            </h2>
            <p className="mb-10 text-lg leading-relaxed text-white/85">{cta.body}</p>
            <Link to={BOOK_CALL_HREF} className={PRIMARY_CTA}>
              {cta.buttonLabel ?? "Book a Call"}
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
