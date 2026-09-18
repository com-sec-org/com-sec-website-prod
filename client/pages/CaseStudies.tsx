import { Button } from "@/components/ui/button";
import { Footer } from "@/components/Footer";
import { Navigation } from "@/components/Navigation";
import { ArrowRight, CheckCircle } from "lucide-react";
import { useState } from "react";
import { Link, useSearchParams } from "react-router-dom";

const categories = ["HealthTech", "AI SaaS", "FinTech", "Energy", "EdTech", "Services", "Ag"];

export default function CaseStudies() {
  const [searchParams, setSearchParams] = useSearchParams();
  const requestedCategory = searchParams.get("category");
  const [category, setCategory] = useState(
    requestedCategory && categories.includes(requestedCategory) ? requestedCategory : "Energy",
  );

  const selectCategory = (nextCategory: string) => {
    setCategory(nextCategory);
    setSearchParams({ category: nextCategory });
  };

  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-slate-50 pt-16">
      <section className="bg-gradient-to-br from-primary via-blue-950 to-slate-950 py-16 text-white sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-200">Client stories</p>
          <h1 className="mt-4 max-w-4xl text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">Security programs built to stay ready</h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-blue-100">See how Com-Sec helps technology teams make security, compliance, and customer assurance part of everyday operations.</p>
        </div>
      </section>

      <section className="py-10 sm:py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2" role="tablist" aria-label="Case study categories">
            {categories.map((item) => (
              <button
                key={item}
                type="button"
                role="tab"
                aria-selected={category === item}
                onClick={() => selectCategory(item)}
                className={`rounded-full border px-4 py-2 text-sm font-semibold transition-colors ${category === item ? "border-primary bg-primary text-white shadow-md" : "border-slate-200 bg-white text-slate-600 hover:border-accent hover:text-primary"}`}
              >
                {item}
              </button>
            ))}
          </div>

          {category === "Energy" ? (
            <article className="mt-8 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl shadow-slate-200/60">
              <div className="grid lg:grid-cols-[1.05fr_1.95fr]">
                <aside className="bg-gradient-to-br from-primary via-blue-950 to-slate-950 p-7 text-white sm:p-10 lg:p-12">
                  <div className="inline-flex rounded-full border border-orange-300/30 bg-orange-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-orange-200">Energy technology</div>
                  <h2 className="mt-6 text-3xl font-bold">Satoshi Energy</h2>
                  <p className="mt-3 text-lg text-blue-100">Bitcoin energy infrastructure</p>
                  <dl className="mt-10 space-y-6 border-t border-white/15 pt-8 text-sm">
                    <div><dt className="font-semibold uppercase tracking-wider text-orange-200">Engagement</dt><dd className="mt-1 text-white/90">August 2025 to present</dd></div>
                    <div><dt className="font-semibold uppercase tracking-wider text-orange-200">GRC platform</dt><dd className="mt-1 text-white/90">Drata</dd></div>
                    <div><dt className="font-semibold uppercase tracking-wider text-orange-200">Trust Center</dt><dd className="mt-1 text-white/90">SafeBase by Drata</dd></div>
                    <div><dt className="font-semibold uppercase tracking-wider text-orange-200">Audit partner</dt><dd className="mt-1 text-white/90">Sensiba</dd></div>
                  </dl>
                </aside>

                <div className="p-7 sm:p-10 lg:p-12">
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">SOC 2 Type II readiness &amp; maintenance</p>
                  <h2 className="mt-4 text-3xl font-bold leading-tight text-primary sm:text-4xl">From SOC 2 Readiness to an Ongoing Security and Audit Readiness Program</h2>
                  <p className="mt-6 text-lg leading-8 text-slate-700">Satoshi Energy needed more than help preparing evidence for a SOC 2 audit. The company needed a security and compliance program that could operate continuously while supporting a growing technology business.</p>
                  <p className="mt-4 leading-7 text-slate-600">Com-Sec worked alongside Satoshi Energy throughout its SOC 2 Type II readiness and audit process, turning individual compliance requirements into an operating program across control implementation, evidence collection, policy management, personnel compliance, risk and vendor management, access reviews, technical security evidence, penetration testing coordination, and direct audit support.</p>

                  <div className="mt-10 grid gap-8 border-t border-slate-200 pt-10 lg:grid-cols-2">
                    <section><h3 className="text-xl font-bold text-primary">The challenge</h3><p className="mt-3 leading-7 text-slate-600">SOC 2 readiness requires more than uploading policies into a compliance platform. Satoshi Energy needed controls operating consistently across access management, personnel security, vendor management, risk, infrastructure, change management, vulnerability management, incident response, business continuity, and security governance throughout the audit period.</p><p className="mt-3 leading-7 text-slate-600">The internal team also needed to keep running the business instead of treating every audit cycle as a separate compliance project.</p></section>
                    <section><h3 className="text-xl font-bold text-primary">Com-Sec&apos;s approach</h3><p className="mt-3 leading-7 text-slate-600">Com-Sec worked directly within Drata to identify control and evidence gaps, coordinate remediation, validate evidence, maintain policies, support personnel compliance, review vendors and risks, coordinate access reviews, and track security exceptions.</p><p className="mt-3 leading-7 text-slate-600">The team bridged compliance requirements and technical implementation, coordinated penetration testing and auditor requests, and helped implement Satoshi Energy&apos;s SafeBase Trust Center for scalable customer assurance.</p></section>
                  </div>

                  <section className="mt-10 rounded-xl bg-slate-50 p-6 sm:p-8"><h3 className="text-xl font-bold text-primary">Results</h3><ul className="mt-5 grid gap-3 text-sm leading-6 text-slate-700 sm:grid-cols-2">{[
                    "SOC 2 Type II readiness and audit support completed across the applicable control environment.",
                    "Ongoing SOC 2 maintenance keeps controls, evidence, and remediation active between audit periods.",
                    "Risk management, vendor security, policies, personnel compliance, and access reviews are part of the recurring lifecycle.",
                    "Penetration testing and security testing are tracked through remediation and retesting as applicable.",
                    "Audit coordination is centralized through Com-Sec, reducing the burden of evidence requests and auditor follow-ups.",
                    "SafeBase provides a centralized, scalable path to approved security and compliance documentation.",
                  ].map((result) => <li key={result} className="flex gap-3"><CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-accent" aria-hidden="true" /><span>{result}</span></li>)}</ul></section>

                  <div className="mt-10 grid gap-8 lg:grid-cols-2"><section><h3 className="text-xl font-bold text-primary">Why Com-Sec</h3><p className="mt-3 leading-7 text-slate-600">Satoshi Energy needed a team that could work inside the existing environment, understand what auditors were asking for, translate requirements for engineering and business stakeholders, help implement controls, validate evidence, and remain involved as the program evolved.</p><p className="mt-3 leading-7 text-slate-600">Com-Sec provided continuity across governance, compliance, technical security, audit coordination, and customer assurance—turning SOC 2 from a periodic audit project into an ongoing security program.</p></section><section className="rounded-xl border border-orange-200 bg-orange-50 p-6"><p className="text-xs font-bold uppercase tracking-wider text-orange-700">Client perspective · pending approval</p><blockquote className="mt-3 text-lg font-medium leading-7 text-primary">“Com-Sec worked alongside our team throughout the SOC 2 process, helping us understand what was required, close gaps, coordinate the audit, and keep the program moving after the initial audit cycle. Having one team supporting both the compliance requirements and the underlying security work made the process significantly easier to manage.”</blockquote><p className="mt-4 text-sm font-semibold text-slate-600">— [Name, Title — confirm], Satoshi Energy</p></section></div>

                  <section className="mt-10 border-t border-slate-200 pt-10"><h3 className="text-xl font-bold text-primary">Built for continuous audit readiness</h3><p className="mt-3 max-w-3xl leading-7 text-slate-600">SOC 2 shouldn&apos;t become a project your team rebuilds every year. Com-Sec helps companies move from audit readiness to an operating security program covering compliance, technical security, testing, evidence, remediation, and audit coordination.</p><Button className="mt-6 bg-accent text-white hover:bg-accent/90" asChild><Link to="/contact">Build a security program that stays ready <ArrowRight className="ml-2 h-4 w-4" /></Link></Button></section>

                  <section className="mt-10 rounded-xl border border-amber-300 bg-amber-50 p-5" aria-label="Publication validation notice"><p className="text-sm font-bold text-amber-950">Publication validation required</p><p className="mt-1 text-sm leading-6 text-amber-900">Before publication, confirm engagement dates and status, the industry/company description, permission to use the Satoshi Energy name and logo, report and audit periods, SOC 2 Type I/II disclosures, Sensiba naming, penetration-test disclosures, SafeBase references, and the approved client quote and attribution.</p></section>
                </div>
              </div>
            </article>
          ) : (
            <div className="mt-8 rounded-2xl border border-dashed border-slate-300 bg-white p-10 text-center"><h2 className="text-xl font-bold text-primary">More {category} stories are coming soon</h2><p className="mt-3 leading-7 text-slate-600">We&apos;re preparing client-approved stories for this category. Choose Energy to read the currently available case study.</p></div>
          )}
        </div>
      </section>
      </div>
      <Footer />
    </>
  );
}
