import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import type { CaseStudyDetail, CaseStudyPoint } from "@/data/caseStudyDetails";

// Overview rows that are shown in the main column only, not in the dark sidebar.
const OVERVIEW_ONLY = new Set(["Company", "Services", "Customers", "Product", "Based in"]);

function PointList({ points }: { points: CaseStudyPoint[] }) {
  return (
    <ul className="mt-5 space-y-4">
      {points.map((point) => {
        const key = typeof point === "string" ? point : point.lead;
        return (
          <li key={key} className="flex gap-3 leading-7 text-slate-600">
            <CheckCircle className="mt-1 h-5 w-5 shrink-0 text-accent" aria-hidden="true" />
            <span>
              {typeof point === "string" ? (
                point
              ) : (
                <>
                  <strong className="text-primary">{point.lead}</strong> {point.text}
                </>
              )}
            </span>
          </li>
        );
      })}
    </ul>
  );
}

function CheckGrid({ items, columns = true }: { items: string[]; columns?: boolean }) {
  return (
    <ul className={`mt-5 grid gap-3 text-sm leading-6 text-slate-700 ${columns ? "sm:grid-cols-2" : ""}`}>
      {items.map((item) => (
        <li key={item} className="flex gap-3">
          <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-accent" aria-hidden="true" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export function CaseStudyArticle({ study }: { study: CaseStudyDetail }) {
  const [lead, ...summary] = study.summary;

  return (
    <article className="mt-10 overflow-hidden rounded-[1.75rem] border border-slate-200/80 bg-white shadow-[0_24px_70px_-34px_rgba(15,23,42,0.5)]">
      <div className="grid lg:grid-cols-[0.9fr_2.1fr]">
        <aside className="relative overflow-hidden bg-gradient-to-br from-primary via-blue-950 to-slate-950 p-7 text-white sm:p-10 lg:p-12">
          <h2 className="text-3xl font-bold">{study.client}</h2>
          <div className="mt-4 inline-flex rounded-full border border-orange-300/30 bg-orange-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-orange-200">{study.badge}</div>
          {study.tagline && <p className="mt-3 text-lg text-blue-100">{study.tagline}</p>}
          <dl className="mt-10 space-y-5 border-t border-white/15 pt-6 text-sm">
            {study.overview
              .filter((row) => !OVERVIEW_ONLY.has(row.label))
              .map((row) => (
                <div key={row.label}>
                  <dt className="font-semibold uppercase tracking-wider text-orange-200">{row.label}</dt>
                  <dd className="mt-1 text-white/90">{row.value}</dd>
                </div>
              ))}
          </dl>
        </aside>

        <div className="p-7 sm:p-10 lg:p-14">
          <h2 className="text-3xl font-bold leading-tight text-primary sm:text-4xl">{study.title}</h2>

          <section className="mt-8">
            <h3 className="text-xl font-bold text-primary">Client Overview</h3>
            <ul className="mt-4 grid gap-3 text-slate-700 sm:grid-cols-2">
              {study.overview.map((row) => (
                <li key={row.label} className={row.label === "Services" ? "sm:col-span-2" : undefined}>
                  <strong>{row.label}:</strong> {row.value}
                </li>
              ))}
            </ul>
          </section>

          <section className="mt-10 border-t border-slate-200 pt-10">
            <h3 className="text-xl font-bold text-primary">Executive Summary</h3>
            <p className="mt-4 text-lg leading-8 text-slate-700">{lead}</p>
            {summary.map((p) => (
              <p key={p} className="mt-4 leading-7 text-slate-600">{p}</p>
            ))}
          </section>

          {study.lookingFor && (
            <section className="mt-10 rounded-xl bg-slate-50 p-6 sm:p-8">
              <h3 className="text-xl font-bold text-primary">What {study.client} Was Looking For</h3>
              <CheckGrid items={study.lookingFor} columns={false} />
            </section>
          )}

          <section className="mt-10 border-t border-slate-200 pt-10">
            <h3 className="text-xl font-bold text-primary">The Challenge</h3>
            {study.challenge.map((p) => (
              <p key={p} className="mt-3 leading-7 text-slate-600">{p}</p>
            ))}
          </section>

          <section className="mt-10 border-t border-slate-200 pt-10">
            <h3 className="text-xl font-bold text-primary">Com-Sec&apos;s Approach</h3>
            {study.approach.intro?.map((p) => (
              <p key={p} className="mt-3 leading-7 text-slate-600">{p}</p>
            ))}
            {study.approach.points && <PointList points={study.approach.points} />}
          </section>

          <section className="mt-10 rounded-xl bg-slate-50 p-6 sm:p-8">
            <h3 className="text-xl font-bold text-primary">Results</h3>
            <CheckGrid items={study.results} />
          </section>

          <section className="mt-10">
            <h3 className="text-xl font-bold text-primary">Why Com-Sec</h3>
            {study.why.intro?.map((p) => (
              <p key={p} className="mt-4 leading-7 text-slate-600">{p}</p>
            ))}
            {study.why.points && <PointList points={study.why.points} />}
          </section>

          {study.quote && (
            <section className="mt-10 rounded-xl border border-orange-200 bg-orange-50 p-6">
              <p className="text-xs font-bold uppercase tracking-wider text-orange-700">Client Perspective</p>
              <blockquote className="mt-3 text-lg font-medium leading-7 text-primary">&quot;{study.quote.text}&quot;</blockquote>
              <p className="mt-4 text-sm font-semibold text-slate-600">
                {study.quote.name && <span className="block">{study.quote.name}</span>}
                <span className="block">{study.quote.attribution}</span>
              </p>
            </section>
          )}

          <section className="mt-12 rounded-2xl bg-primary p-7 text-white sm:p-9">
            <h3 className="text-2xl font-bold">{study.cta.heading}</h3>
            {study.cta.text.map((p) => (
              <p key={p} className="mt-4 max-w-2xl leading-7 text-blue-100">{p}</p>
            ))}
            <Button className="mt-6 bg-accent text-white hover:bg-accent/90" asChild>
              <Link to="/contact">Talk to Com-Sec <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </section>
        </div>
      </div>
    </article>
  );
}
