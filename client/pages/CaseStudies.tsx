import { Button } from "@/components/ui/button";
import { Footer } from "@/components/Footer";
import { Navigation } from "@/components/Navigation";
import { ArrowRight, CheckCircle } from "lucide-react";
import { Link, useParams, useSearchParams } from "react-router-dom";

const categories = ["HealthTech", "AI SaaS", "FinTech", "Energy", "EdTech", "Services"] as const;
type Category = (typeof categories)[number];
const caryHealthLogo = "https://cdn.builder.io/api/v1/image/assets%2F0ba8b9be18d047ca8e1a6f29e75eea99%2Fd55a94343bf843fe802dba632ce12c59?format=webp&width=800&height=1200";
const vhedaHealthLogo = "https://cdn.builder.io/api/v1/image/assets%2F0ba8b9be18d047ca8e1a6f29e75eea99%2F21d2ed258d9242689e8728242991d350?format=webp&width=800&height=1200";

const studiesByCategory: Record<Category, { id: string; client: string; title: string; summary: string; meta: string }[]> = {
  HealthTech: [
    {
      id: "caryhealth",
      client: "CaryHealth",
      title: "From First Questionnaire to Acquisition",
      summary: "How an embedded security team helped CaryHealth move from a customer SIG questionnaire through growth and acquisition due diligence.",
      meta: "Digital pharmacy · SOC 2 · HIPAA",
    },
    {
      id: "vheda-health",
      client: "Vheda Health",
      title: "From HITRUST Complexity to an Embedded Security & IT Partnership",
      summary: "How Vheda Health turned HITRUST readiness into an embedded security and IT partnership.",
      meta: "Virtual Care · HITRUST · Managed IT",
    },
  ],
  "AI SaaS": [],
  FinTech: [],
  Energy: [],
  EdTech: [],
  Services: [],
};

export default function CaseStudies() {
  const { studyId } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const requestedCategory = searchParams.get("category");
  const requestedStudy = studyId ?? searchParams.get("study");
  const categoryFromStudy = categories.find((item) => studiesByCategory[item].some((study) => study.id === requestedStudy));
  const category = categories.find((item) => item === requestedCategory) ?? categoryFromStudy ?? "HealthTech";

  const categoryStudies = studiesByCategory[category] ?? [];
  const selectedStudy = categoryStudies.find((study) => study.id === requestedStudy);

  const selectCategory = (nextCategory: Category) => {
    setSearchParams({ category: nextCategory });
  };

  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-slate-50 pt-16">
      <section className="relative overflow-hidden bg-gradient-to-br from-primary via-blue-950 to-slate-950 py-14 text-white sm:py-18">
        <div className="absolute -right-24 -top-32 h-96 w-96 rounded-full bg-blue-400/10 blur-3xl" aria-hidden="true" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-orange-200">Client stories</p>
            <h1 className="mt-5 max-w-3xl text-4xl font-bold leading-[1.08] sm:text-5xl lg:text-6xl">Real Clients. Real Security Outcomes.</h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-blue-100 sm:text-lg">See how Com-Sec helps technology teams make security, compliance, and customer assurance part of everyday operations.</p>
          </div>
        </div>
      </section>

      <section className="py-10 sm:py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="inline-flex max-w-full flex-wrap gap-1 rounded-2xl border border-slate-200 bg-white p-1.5 shadow-sm" role="tablist" aria-label="Case study categories">
            {categories.map((item) => (
              <button
                key={item}
                type="button"
                role="tab"
                aria-selected={category === item}
                onClick={() => selectCategory(item)}
                className={`rounded-xl px-4 py-2.5 text-sm font-semibold transition-all ${category === item ? "bg-primary text-white shadow-sm" : "text-slate-600 hover:bg-slate-100 hover:text-primary"}`}
              >
                {item}
              </button>
            ))}
          </div>

          {selectedStudy && (
            <Link to={`/case-studies?category=${encodeURIComponent(category)}`} className="mt-8 inline-flex items-center text-sm font-semibold text-accent hover:text-primary">
              <ArrowRight className="mr-2 h-4 w-4 rotate-180" /> Back to {category} case studies
            </Link>
          )}

          {selectedStudy && category === "HealthTech" ? (
            <>
            {selectedStudy.id === "caryhealth" && (
            <article className="mt-10 overflow-hidden rounded-[1.75rem] border border-slate-200/80 bg-white shadow-[0_24px_70px_-34px_rgba(15,23,42,0.5)]">
              <div className="grid lg:grid-cols-[0.9fr_2.1fr]">
                <aside className="relative overflow-hidden bg-gradient-to-br from-primary via-blue-950 to-slate-950 p-7 text-white sm:p-10 lg:p-12">
                  <img
                    src={caryHealthLogo}
                    alt="CaryHealth logo"
                    className="mb-8 h-12 w-auto object-contain object-left sm:h-14"
                  />
                  <div className="inline-flex rounded-full border border-orange-300/30 bg-orange-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-orange-200">HealthTech</div>
                  <h2 className="mt-6 text-3xl font-bold">CaryHealth</h2>
                  <p className="mt-3 text-lg text-blue-100">Digital pharmacy</p>
                  <dl className="mt-10 space-y-5 border-t border-white/15 pt-6 text-sm">
                    <div><dt className="font-semibold uppercase tracking-wider text-orange-200">Industry</dt><dd className="mt-1 text-white/90">HealthTech, digital pharmacy</dd></div>
                    <div><dt className="font-semibold uppercase tracking-wider text-orange-200">Company</dt><dd className="mt-1 text-white/90">CaryHealth (formerly CaryRx)</dd></div>
                    <div><dt className="font-semibold uppercase tracking-wider text-orange-200">GRC platform</dt><dd className="mt-1 text-white/90">Drata</dd></div>
                    <div><dt className="font-semibold uppercase tracking-wider text-orange-200">Relationship</dt><dd className="mt-1 text-white/90">Com-Sec&apos;s first client</dd></div>
                    <div><dt className="font-semibold uppercase tracking-wider text-orange-200">Engagement</dt><dd className="mt-1 text-white/90">Began pre-launch and continued through CaryHealth&apos;s acquisition by CareTria in May 2026</dd></div>
                  </dl>
                </aside>

                <div className="p-7 sm:p-10 lg:p-14">
                  <h2 className="text-3xl font-bold leading-tight text-primary sm:text-4xl">From First Questionnaire to Acquisition</h2>

                  <section className="mt-8"><h3 className="text-xl font-bold text-primary">Client overview</h3><ul className="mt-4 grid gap-3 text-slate-700 sm:grid-cols-2"><li><strong>Industry:</strong> HealthTech, digital pharmacy</li><li><strong>Company:</strong> CaryHealth (formerly CaryRx)</li><li><strong>Services:</strong> vCISO, SOC 2 readiness and maintenance, HIPAA support, penetration testing, security engineering, security awareness, vendor risk, audit coordination</li><li><strong>GRC platform:</strong> Drata</li><li><strong>Relationship:</strong> Com-Sec&apos;s first client</li><li><strong>Engagement:</strong> Began pre-launch and continued through CaryHealth&apos;s acquisition by CareTria in May 2026</li></ul></section>

                  <section className="mt-10 border-t border-slate-200 pt-10"><h3 className="text-xl font-bold text-primary">Executive summary</h3><p className="mt-4 text-lg leading-8 text-slate-700">CaryHealth&apos;s security program didn&apos;t just pass its acquisition due diligence, it was clean enough that it wasn&apos;t a negotiating point.</p><p className="mt-4 leading-7 text-slate-600">CaryHealth CEO Areo Nazari knew Farbod from his time leading security at Lark. What started as a small request to help complete a customer SIG questionnaire quickly grew into a long-term partnership. Com-Sec became CaryHealth&apos;s embedded security team, building its security framework and leading vCISO, SOC 2 and HIPAA readiness, cloud and application security, penetration testing, employee training, onboarding and offboarding, vendor reviews, audit coordination, compliance, and IT support.</p><p className="mt-4 leading-7 text-slate-600">The partnership continued through CaryHealth&apos;s growth and eventual acquisition by CareTria to form an integrated direct-to-patient pharmacy platform. Internal delivery reports show the results: a SOC 2 audit with zero findings, full Drata governance and personnel compliance, and a 96/100 external security score.</p></section>

                  <div className="mt-10 grid gap-8 border-t border-slate-200 pt-10 lg:grid-cols-2">
                    <section><h3 className="text-xl font-bold text-primary">The challenge</h3><p className="mt-3 leading-7 text-slate-600">CaryHealth needed a SIG questionnaire answered. Answering it exposed the real problem: no defensible security framework to support enterprise reviews, SOC 2, healthcare requirements, or growth.</p><p className="mt-3 leading-7 text-slate-600">As the company scaled, that gap widened, cloud infrastructure, application development, workforce controls, vendor management, customer assurance. Engineering had neither the process nor the time to address vulnerabilities flagged by Dependabot and SonarCloud.The AWS access model relied on practices that got harder to manage safely as headcount grew.</p><p className="mt-3 leading-7 text-slate-600">CaryHealth didn&apos;t need an audit prep vendor. It needed leadership that could connect governance to engineering, IT, and daily operations.</p></section>
                    <section><h3 className="text-xl font-bold text-primary">Com-Sec&apos;s approach</h3><p className="mt-3 leading-7 text-slate-600">Com-Sec started by helping complete the SIG questionnaire, then translated its underlying requirements into a comprehensive SOC 2 program covering governance, policies, controls, training, evidence collection, ownership, risk management, and remediation.</p><p className="mt-3 leading-7 text-slate-600">From there: Com-Sec provided ongoing vCISO oversight across the program, including access management, vendor risk, control monitoring, remediation, and coordination with auditors.</p><p className="mt-3 leading-7 text-slate-600">On the technical side: planning an AWS Identity Center migration to kill hardcoded credentials and centralize access, monitoring Dependabot and AWS Inspector and GuardDuty alerts, folding high-severity remediation into engineering sprints, and using SonarCloud to harden secure code development practices.</p><p className="mt-3 leading-7 text-slate-600">Recurring operations covered access reviews, phishing simulations, security training, endpoint security, email encryption, domain health, device-management evaluation, onboarding/offboarding, vulnerability monitoring, vendor reviews, and penetration testing.</p></section>
                  </div>

                  <section className="mt-10 rounded-xl bg-slate-50 p-6 sm:p-8"><h3 className="text-xl font-bold text-primary">Results</h3><ul className="mt-5 grid gap-3 text-sm leading-6 text-slate-700 sm:grid-cols-2">{[
                    "SOC 2 audit completed with zero findings",
                    "Drata governance maintained at 100% compliance",
                    "25 of 25 personnel compliant (July 2025 report)",
                    "External SecurityScorecard rating of 96/100",
                    "CrowdStrike Falcon was deployed organization-wide, replacing more expensive legacy endpoint security tools.",
                    "Monthly phishing simulations and targeted employee retraining were implemented as an ongoing program.",
                    "Web app penetration test completed with only four low-severity findings (July 2025)",
                    "Recurring roadmap in place for SOC 2, penetration testing, incident response, business continuity and disaster recovery, risk assessments, access reviews, policy renewals, vendor security",
                    "Program scaled from one customer questionnaire to a multi-year security function that carried CaryHealth through significant growth and its May 2026 acquisition",
                  ].map((result) => <li key={result} className="flex gap-3"><CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-accent" aria-hidden="true" /><span>{result}</span></li>)}</ul></section>

                  <section className="mt-10"><h3 className="text-xl font-bold text-primary">Why Com-Sec</h3><p className="mt-4 leading-7 text-slate-600">CaryHealth didn&apos;t need five vendors for strategy, compliance, engineering, testing, and daily operations. It needed one team that could move from advice to execution and scale with the company. That&apos;s what let the security program hold up under acquisition scrutiny instead of becoming a liability in the deal.</p></section>

                  <section className="mt-10 rounded-xl border border-orange-200 bg-orange-50 p-6"><p className="text-xs font-bold uppercase tracking-wider text-orange-700">Client perspective</p><blockquote className="mt-3 text-lg font-medium leading-7 text-primary">&quot;I brought Farbod one questionnaire because I trusted him from our Lark days. I wasn&apos;t shopping for a vendor. That trust is why it turned into the security program that got us through diligence. When CareTria&apos;s team went through our environment, it wasn&apos;t a red flag. It didn&apos;t slow the deal down. That&apos;s what I actually paid for, even if I didn&apos;t know it at the time.&quot;</blockquote><p className="mt-4 text-sm font-semibold text-slate-600"><span className="block">Areo Nazari</span><span className="block">CEO, CaryHealth</span></p></section>

                  <section className="mt-10 border-t border-slate-200 pt-10"><h3 className="text-xl font-bold text-primary">Build security that holds up</h3><p className="mt-4 leading-7 text-slate-600">Need a security program that can stand up to customer questionnaires, audits, and acquisition diligence? <Link to="/contact" className="font-semibold text-accent underline underline-offset-4 hover:text-primary">Talk to Com-Sec</Link>.</p></section>


                  <section className="mt-10"><h3 className="text-xl font-bold text-primary">Sources</h3><ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-6 text-slate-600"><li><a className="text-accent underline" href="https://www.cary.health/about" target="_blank" rel="noreferrer">CaryHealth company overview</a></li><li><a className="text-accent underline" href="https://com-sec.io/blog/caryhealth-first-client-story" target="_blank" rel="noreferrer">Com-Sec&apos;s CaryHealth first-client story</a></li><li><a className="text-accent underline" href="https://www.cary.health/press-release-news/caretria-acquires-caryhealth-creating-an-industry-leading-direct-to-patient-pharmacy-platform" target="_blank" rel="noreferrer">CareTria acquisition announcement</a></li></ul></section>


                </div>
              </div>
            </article>
            )}

            {selectedStudy.id === "vheda-health" && (
            <article className="mt-10 overflow-hidden rounded-[1.75rem] border border-slate-200/80 bg-white shadow-[0_24px_70px_-34px_rgba(15,23,42,0.5)]">
              <div className="grid lg:grid-cols-[0.9fr_2.1fr]">
                <aside className="relative overflow-hidden bg-gradient-to-br from-primary via-blue-950 to-slate-950 p-7 text-white sm:p-10 lg:p-12">
                  <img
                    src={vhedaHealthLogo}
                    alt="Vheda Health logo"
                    className="mb-8 h-16 w-full max-w-[250px] object-contain object-left"
                  />
                  <div className="inline-flex rounded-full border border-orange-300/30 bg-orange-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-orange-200">HealthTech · Virtual Care</div>
                  <h2 className="mt-6 text-3xl font-bold">Vheda Health</h2>
                  <p className="mt-3 text-lg text-blue-100">Embedded security &amp; IT partnership</p>
                  <dl className="mt-10 space-y-5 border-t border-white/15 pt-6 text-sm">
                    <div><dt className="font-semibold uppercase tracking-wider text-orange-200">Industry</dt><dd className="mt-1 text-white/90">HealthTech, Virtual Care</dd></div>
                    <div><dt className="font-semibold uppercase tracking-wider text-orange-200">GRC platform</dt><dd className="mt-1 text-white/90">Vanta</dd></div>
                    <div><dt className="font-semibold uppercase tracking-wider text-orange-200">Engagement</dt><dd className="mt-1 text-white/90">March 2024 – Present</dd></div>
                  </dl>
                </aside>

                <div className="p-7 sm:p-10 lg:p-14">
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">HealthTech · Virtual Care</p>
                  <h2 className="mt-4 text-3xl font-bold leading-tight text-primary sm:text-4xl">From HITRUST Complexity to an Embedded Security &amp; IT Partnership</h2>

                  <section className="mt-10"><h3 className="text-xl font-bold text-primary">Client Overview</h3><ul className="mt-5 grid gap-4 text-slate-700 sm:grid-cols-2"><li><strong>Industry:</strong> HealthTech, Virtual Care</li><li><strong>Company:</strong> Vheda Health</li><li className="sm:col-span-2"><strong>Services:</strong> vCISO, HITRUST Readiness, Managed IT, Security Operations, Security Awareness, Vendor Risk Reviews, Incident Response, Penetration Testing Support</li><li><strong>GRC Platform:</strong> Vanta</li><li><strong>Engagement:</strong> March 2024 – Present</li></ul></section>

                  <section className="mt-12 border-t border-slate-200 pt-10"><h3 className="text-xl font-bold text-primary">The Challenge</h3><div className="mt-5 space-y-4 leading-7 text-slate-600"><p>Vheda Health delivers virtual-first healthcare programs across chronic care, maternal health, and behavioral health. Operating in healthcare means security, privacy, regulatory requirements, and customer assurance are closely tied to everyday business operations.</p><p>As the organization worked through HITRUST readiness, the scope of security and compliance responsibilities continued to grow. The team needed to manage assessment requirements and remediation while also supporting employees, endpoints, cloud infrastructure, vendor security reviews, payer requirements, incident response, and day-to-day IT operations.</p><p>The challenge was no longer simply completing a compliance project.</p><p>Vheda Health needed additional security leadership and hands-on operational support that could work alongside its internal team and keep security, compliance, and IT moving together.</p></div></section>

                  <section className="mt-12 border-t border-slate-200 pt-10"><h3 className="text-xl font-bold text-primary">Com-Sec’s Approach</h3><div className="mt-5 space-y-4 leading-7 text-slate-600"><p>Com-Sec began by supporting Vheda Health’s HITRUST readiness program, helping the team interpret requirements, identify gaps, organize evidence, coordinate remediation, and prepare for assessment activities.</p><p>As the relationship developed, the engagement expanded into an embedded security and IT partnership.</p><p>Com-Sec provides ongoing vCISO leadership and works directly with Vheda Health on security governance, risk management, vendor security reviews, incident response, business continuity, cloud security, access management, security awareness, and compliance initiatives.</p><p>A dedicated Com-Sec IT support analyst also works directly with Vheda Health, providing hands-on support for day-to-day IT operations.</p><p>The program includes:</p></div><ul className="mt-5 grid gap-3 text-sm leading-6 text-slate-700 sm:grid-cols-2">{[
                    "HITRUST readiness and assessment support",
                    "Ongoing vCISO leadership",
                    "Managed IT and end-user support",
                    "Microsoft Intune device management and compliance",
                    "Security incident response and documentation",
                    "Vendor security and risk reviews",
                    "Penetration-test remediation",
                    "AWS and GuardDuty security reviews",
                    "Access management and onboarding/offboarding improvements",
                    "Risk register and security governance management",
                    "Phishing simulations and security awareness campaigns",
                    "Security Champions initiatives",
                    "Partner and payer security-assurance support",
                    "Recurring security, compliance, and IT leadership meetings",
                  ].map((item) => <li key={item} className="flex gap-3"><CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-accent" aria-hidden="true" /><span>{item}</span></li>)}</ul><p className="mt-6 leading-7 text-slate-600">Rather than treating compliance, security, and IT as separate projects, Com-Sec helped establish an operating model where these activities could be managed together.</p></section>

                  <section className="mt-12 rounded-2xl bg-slate-50 p-6 sm:p-8"><h3 className="text-xl font-bold text-primary">The Results</h3><p className="mt-4 leading-7 text-slate-600">The engagement has produced measurable improvements across Vheda Health’s security, compliance, and IT operations.</p><div className="mt-7 grid gap-4 sm:grid-cols-2"><div className="rounded-2xl bg-primary p-5 text-white sm:col-span-2"><p className="text-4xl font-bold tracking-tight">70 → 96</p><p className="mt-2 text-sm font-semibold text-blue-100">External SecurityScorecard rating improvement</p></div><div className="rounded-2xl border border-blue-100 bg-white p-5"><p className="text-2xl font-bold text-primary">123 users</p><p className="mt-2 text-sm leading-6 text-slate-600">Enrolled in Microsoft Intune for improved endpoint visibility and device compliance</p></div><div className="rounded-2xl border border-blue-100 bg-white p-5"><p className="text-lg font-bold text-primary">Penetration-test remediation completed</p><p className="mt-2 text-sm leading-6 text-slate-600">Identified security findings were tracked through remediation</p></div><div className="rounded-2xl border border-blue-100 bg-white p-5"><p className="text-lg font-bold text-primary">Embedded IT support</p><p className="mt-2 text-sm leading-6 text-slate-600">A dedicated Com-Sec IT analyst works directly with the Vheda Health team</p></div><div className="rounded-2xl border border-blue-100 bg-white p-5"><p className="text-lg font-bold text-primary">Recurring security governance</p><p className="mt-2 text-sm leading-6 text-slate-600">Security, compliance, risk, and IT priorities are reviewed with leadership on an ongoing basis</p></div></div><div className="mt-5 grid gap-3 sm:grid-cols-2"><div className="rounded-xl border border-slate-200 bg-white p-4"><p className="font-semibold text-primary">Improved cloud-security visibility</p><p className="mt-1 text-sm leading-6 text-slate-600">AWS and GuardDuty security monitoring incorporated into ongoing security operations</p></div><div className="rounded-xl border border-slate-200 bg-white p-4"><p className="font-semibold text-primary">Centralized IT support</p><p className="mt-1 text-sm leading-6 text-slate-600">IT requests and operational activities organized through established support workflows</p></div><div className="rounded-xl border border-slate-200 bg-white p-4"><p className="font-semibold text-primary">Formalized security awareness</p><p className="mt-1 text-sm leading-6 text-slate-600">Phishing simulations, awareness communications, and Security Champions activities became part of the security program</p></div><div className="rounded-xl border border-slate-200 bg-white p-4"><p className="font-semibold text-primary">Structured vendor risk management</p><p className="mt-1 text-sm leading-6 text-slate-600">Vendor security reviews and third-party risk activities are incorporated into ongoing operations</p></div><div className="rounded-xl border border-slate-200 bg-white p-4 sm:col-span-2"><p className="font-semibold text-primary">Ongoing HITRUST support</p><p className="mt-1 text-sm leading-6 text-slate-600">Assessment preparation, evidence management, remediation, and readiness activities are managed as part of the broader security program</p></div></div></section>

                  <section className="mt-12 border-t border-slate-200 pt-10"><h3 className="text-xl font-bold text-primary">More Than Compliance Support</h3><div className="mt-5 space-y-4 leading-7 text-slate-600"><p>The relationship with Vheda Health evolved beyond a traditional compliance engagement.</p><p>Instead of providing recommendations and leaving implementation to the client, Com-Sec works alongside Vheda Health across strategic security leadership and day-to-day execution.</p><p>The same team can help address a HITRUST requirement, review a security risk, respond to a partner questionnaire, investigate an incident, improve endpoint compliance, coordinate remediation, and support ongoing IT operations.</p><p>This gives Vheda Health a consistent security and compliance function without having to coordinate multiple disconnected providers.</p></div></section>

                  <section className="mt-12 border-t border-slate-200 pt-10"><h3 className="text-xl font-bold text-primary">Why Com-Sec</h3><div className="mt-5 space-y-4 leading-7 text-slate-600"><p>Healthcare organizations often need more than help preparing for an assessment.</p><p>They need someone who can connect compliance requirements with the technical and operational work required to maintain them.</p><p>For Vheda Health, Com-Sec provides that combination through an embedded model covering security leadership, compliance, technical security, and IT operations.</p><p>The result is a security program that operates as part of the organization rather than as a separate compliance exercise.</p></div></section>

                  <section className="mt-12 rounded-2xl bg-primary p-7 text-white sm:p-9"><h3 className="text-2xl font-bold">Need Security, Compliance, and IT to Work as One Program?</h3><p className="mt-4 max-w-2xl leading-7 text-blue-100">If HITRUST, security operations, and IT responsibilities are stretching your internal team, Com-Sec can provide the leadership and hands-on support needed to bring them together.</p><Button className="mt-6 bg-accent text-white hover:bg-accent/90" asChild><Link to="/contact">Talk to Com-Sec <ArrowRight className="ml-2 h-4 w-4" /></Link></Button></section>

                </div>
              </div>
            </article>
            )}
            </>
          ) : (
            <div className="mt-10">
              {categoryStudies.length > 0 ? (
                <div className="grid gap-6 md:grid-cols-2">
                  {categoryStudies.map((study) => (
                    <article key={study.id} className="group relative flex flex-col overflow-hidden rounded-[1.5rem] border border-slate-200/80 bg-white shadow-[0_18px_50px_-30px_rgba(15,23,42,0.45)] transition-all hover:-translate-y-1 hover:border-blue-200 hover:shadow-[0_24px_60px_-28px_rgba(15,23,42,0.5)]">
                      <div className="h-1.5 bg-gradient-to-r from-accent via-orange-300 to-blue-500" />
                      <div className="flex flex-1 flex-col p-7 sm:p-8">
                        <div className="flex items-start justify-between gap-5">
                          <div>
                            <span className="text-xs font-bold uppercase tracking-[0.2em] text-accent">{category}</span>
                            <h2 className="mt-3 text-2xl font-bold leading-tight text-primary">{study.client}</h2>
                          </div>
                        </div>
                        <h3 className="mt-6 max-w-xl text-lg font-semibold leading-7 text-slate-700">{study.title}</h3>
                        <p className="mt-4 flex-1 leading-7 text-slate-600">{study.summary}</p>
                        <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-slate-100 pt-5">
                          <span className="text-sm text-slate-500">{study.meta}</span>
                          <Link to={`/case-studies/${study.id}?category=${encodeURIComponent(category)}`} className="inline-flex items-center rounded-full bg-primary px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-accent">Explore the story <ArrowRight className="ml-2 h-4 w-4" /></Link>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              ) : (
                <div className="rounded-2xl border border-dashed border-slate-300 bg-white p-10 text-center"><h2 className="text-xl font-bold text-primary">More {category} stories are coming soon</h2><p className="mt-3 leading-7 text-slate-600">We&apos;re preparing client-approved stories for this category. Check back soon for the next client story.</p></div>
              )}
            </div>
          )}
        </div>
      </section>
      </div>
      <Footer />
    </>
  );
}
