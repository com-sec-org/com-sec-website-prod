import { Button } from "@/components/ui/button";
import { Footer } from "@/components/Footer";
import { Navigation } from "@/components/Navigation";
import { ArrowRight, CheckCircle } from "lucide-react";
import { Link, useNavigate, useParams, useSearchParams } from "react-router-dom";

const categories = ["HealthTech", "AI SaaS", "FinTech", "Energy", "EdTech", "Services", "Ag"];

const studiesByCategory: Record<string, { id: string; client: string; title: string; summary: string; meta: string }[]> = {
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
      title: "Buried in HITRUST, Understaffed on IT: How Vheda Health Made Com-Sec Part of the Team",
      summary: "How Vheda Health combined HITRUST readiness, security operations, and embedded IT support with Com-Sec.",
      meta: "Virtual care · HITRUST · Managed IT",
    },
  ],
  "AI SaaS": [],
  FinTech: [],
  Energy: [
    {
      id: "satoshi-energy",
      client: "Satoshi Energy",
      title: "From SOC 2 Readiness to an Ongoing Security and Audit Readiness Program",
      summary: "How Satoshi Energy turned SOC 2 readiness into an operating security and customer assurance program.",
      meta: "Energy technology · SOC 2 Type II",
    },
  ],
  EdTech: [],
  Services: [],
  Ag: [],
};

export default function CaseStudies() {
  const { studyId } = useParams();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const requestedCategory = searchParams.get("category");
  const requestedStudy = studyId ?? searchParams.get("study");
  const categoryFromStudy = categories.find((item) => studiesByCategory[item]?.some((study) => study.id === requestedStudy));
  const category = requestedCategory && categories.includes(requestedCategory) ? requestedCategory : categoryFromStudy ?? "Energy";

  const categoryStudies = studiesByCategory[category] ?? [];
  const selectedStudy = categoryStudies.find((study) => study.id === requestedStudy);

  const selectCategory = (nextCategory: string) => {
    navigate(`/case-studies?category=${encodeURIComponent(nextCategory)}`);
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

          {selectedStudy && (
            <Link to={`/case-studies?category=${encodeURIComponent(category)}`} className="mt-8 inline-flex items-center text-sm font-semibold text-accent hover:text-primary">
              <ArrowRight className="mr-2 h-4 w-4 rotate-180" /> Back to {category} case studies
            </Link>
          )}

          {selectedStudy?.id === "satoshi-energy" ? (
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
          ) : selectedStudy && category === "HealthTech" ? (
            <>
            {selectedStudy.id === "caryhealth" && (
            <article className="mt-8 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl shadow-slate-200/60">
              <div className="grid lg:grid-cols-[1.05fr_1.95fr]">
                <aside className="bg-gradient-to-br from-primary via-blue-950 to-slate-950 p-7 text-white sm:p-10 lg:p-12">
                  <div className="inline-flex rounded-full border border-orange-300/30 bg-orange-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-orange-200">HealthTech</div>
                  <h2 className="mt-6 text-3xl font-bold">CaryHealth</h2>
                  <p className="mt-3 text-lg text-blue-100">Digital pharmacy</p>
                  <dl className="mt-10 space-y-6 border-t border-white/15 pt-8 text-sm">
                    <div><dt className="font-semibold uppercase tracking-wider text-orange-200">Industry</dt><dd className="mt-1 text-white/90">HealthTech, digital pharmacy</dd></div>
                    <div><dt className="font-semibold uppercase tracking-wider text-orange-200">Company</dt><dd className="mt-1 text-white/90">CaryHealth (formerly CaryRx)</dd></div>
                    <div><dt className="font-semibold uppercase tracking-wider text-orange-200">GRC platform</dt><dd className="mt-1 text-white/90">Drata</dd></div>
                    <div><dt className="font-semibold uppercase tracking-wider text-orange-200">Relationship</dt><dd className="mt-1 text-white/90">Com-Sec&apos;s first client</dd></div>
                    <div><dt className="font-semibold uppercase tracking-wider text-orange-200">Engagement</dt><dd className="mt-1 text-white/90">Began pre-launch, ran through CaryHealth&apos;s acquisition by CareTria in May 2026 [confirm first year of paid work]</dd></div>
                  </dl>
                </aside>

                <div className="p-7 sm:p-10 lg:p-12">
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">From first questionnaire to acquisition</p>
                  <h2 className="mt-4 text-3xl font-bold leading-tight text-primary sm:text-4xl">From First Questionnaire to Acquisition</h2>

                  <section className="mt-8"><h3 className="text-xl font-bold text-primary">Client overview</h3><ul className="mt-4 grid gap-3 text-slate-700 sm:grid-cols-2"><li><strong>Industry:</strong> HealthTech, digital pharmacy</li><li><strong>Company:</strong> CaryHealth (formerly CaryRx)</li><li><strong>Services:</strong> vCISO, SOC 2 readiness and maintenance, HIPAA support, penetration testing, security engineering, security awareness, vendor risk, audit coordination</li><li><strong>GRC platform:</strong> Drata</li><li><strong>Relationship:</strong> Com-Sec&apos;s first client</li><li><strong>Engagement:</strong> Began pre-launch, ran through CaryHealth&apos;s acquisition by CareTria in May 2026 [confirm first year of paid work]</li></ul></section>

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

                  <section className="mt-10 rounded-xl border border-orange-200 bg-orange-50 p-6"><p className="text-xs font-bold uppercase tracking-wider text-orange-700">Client perspective</p><blockquote className="mt-3 text-lg font-medium leading-7 text-primary">&quot;I brought Farbod one questionnaire because I trusted him from our Lark days — I wasn&apos;t shopping for a vendor. That trust is why it turned into the security program that got us through diligence. When CareTria&apos;s team went through our environment, it wasn&apos;t a red flag. It didn&apos;t slow the deal down. That&apos;s what I actually paid for, even if I didn&apos;t know it at the time.&quot;</blockquote><p className="mt-4 text-sm font-semibold text-slate-600">— Areo Nazari, CEO, CaryHealth</p><p className="mt-3 text-sm italic text-slate-500">(Draft — send to Areo for final wording approval before publishing.)</p></section>

                  <section className="mt-10 border-t border-slate-200 pt-10"><h3 className="text-xl font-bold text-primary">Call to action</h3><p className="mt-4 leading-7 text-slate-600">If your security program needs to survive a customer&apos;s SIG questionnaire, an auditor, or a buyer&apos;s due diligence team — not just look good on paper — talk to Com-Sec.</p><p className="mt-4 text-lg font-semibold leading-7 text-primary">Version 2:</p><p className="mt-2 text-lg font-semibold leading-7 text-primary">Security that holds up to customers, auditors, and buyers. That’s Com-Sec.</p><Button className="mt-6 bg-accent text-white hover:bg-accent/90" asChild><Link to="/contact">Talk to Com-Sec <ArrowRight className="ml-2 h-4 w-4" /></Link></Button></section>

                  <section className="mt-10 rounded-xl border border-amber-300 bg-amber-50 p-6"><h3 className="text-xl font-bold text-amber-950">Still needed</h3><ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-6 text-amber-900"><li>Confirm the year of the original SIG questionnaire / first paid engagement</li><li>Permission to use CaryHealth&apos;s name and logo</li><li>Confirm &quot;SOC 2 with zero findings&quot; is publishable</li><li>Confirm the 96/100 score is publishable</li><li>Any enterprise deal, health plan, or pharma review directly supported by this work</li><li>Estimated internal hours/hires avoided</li><li>Confirm the engagement can be framed as concluding because of the CareTria acquisition</li></ul></section>

                  <section className="mt-10"><h3 className="text-xl font-bold text-primary">Sources</h3><ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-6 text-slate-600"><li><a className="text-accent underline" href="https://www.cary.health/about" target="_blank" rel="noreferrer">CaryHealth company overview</a></li><li><a className="text-accent underline" href="https://com-sec.io/blog/caryhealth-first-client-story" target="_blank" rel="noreferrer">Com-Sec&apos;s CaryHealth first-client story</a></li><li><a className="text-accent underline" href="https://www.cary.health/press-release-news/caretria-acquires-caryhealth-creating-an-industry-leading-direct-to-patient-pharmacy-platform" target="_blank" rel="noreferrer">CareTria acquisition announcement</a></li><li><a className="text-accent underline" href="https://www.canva.com/d/e4O-dHquGGpViGF" target="_blank" rel="noreferrer">CaryHealth vCISO SOW in Canva</a></li><li><a className="text-accent underline" href="https://www.canva.com/d/S13pBb7bSl3IVHp" target="_blank" rel="noreferrer">CaryHealth July 2025 update in Canva</a></li><li><a className="text-accent underline" href="https://www.canva.com/d/RkoO1FSxukse6mM" target="_blank" rel="noreferrer">CaryHealth 2026 roadmap in Canva</a></li><li><a className="text-accent underline" href="https://app.notion.com/p/dc4f2cfa33ad42eda3d3269d4309a14d?pvs=204" target="_blank" rel="noreferrer">CaryHealth security and compliance playbook in Notion</a></li></ul></section>

                  <section className="mt-10 rounded-xl border border-amber-300 bg-amber-50 p-6"><h3 className="text-xl font-bold text-amber-950">Publication checklist (before this goes live)</h3><ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-6 text-amber-900"><li>Confirm the client&apos;s legal and public-facing name</li><li>Confirm engagement dates and current status</li><li>Written permission to use company name and logo</li><li>Verify every audit, certification, score, finding count, date, customer reference, and measurable result</li><li>Approval before naming auditors, partners, customers, or platforms</li><li>Replace the draft quote with client-approved language and attribution</li><li>Remove internal pricing, staffing, health ratings, and confidential operating details</li><li>Final Com-Sec review before publication</li></ul></section>
                </div>
              </div>
            </article>
            )}

            {selectedStudy.id === "vheda-health" && (
            <article className="mt-8 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl shadow-slate-200/60">
              <div className="border-b border-amber-200 bg-amber-50 px-7 py-4 text-sm font-semibold leading-6 text-amber-950 sm:px-10 lg:px-12">
                Status: DRAFT. Quote is not final — pending client wording approval. Do not publish until every item in the checklist below is confirmed.
              </div>
              <div className="grid lg:grid-cols-[1.05fr_1.95fr]">
                <aside className="bg-gradient-to-br from-primary via-blue-950 to-slate-950 p-7 text-white sm:p-10 lg:p-12">
                  <div className="inline-flex rounded-full border border-orange-300/30 bg-orange-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-orange-200">HealthTech</div>
                  <h2 className="mt-6 text-3xl font-bold">Vheda Health</h2>
                  <p className="mt-3 text-lg text-blue-100">Virtual care</p>
                  <dl className="mt-10 space-y-6 border-t border-white/15 pt-8 text-sm">
                    <div><dt className="font-semibold uppercase tracking-wider text-orange-200">Industry</dt><dd className="mt-1 text-white/90">HealthTech, virtual care</dd></div>
                    <div><dt className="font-semibold uppercase tracking-wider text-orange-200">Company</dt><dd className="mt-1 text-white/90">Vheda Health</dd></div>
                    <div><dt className="font-semibold uppercase tracking-wider text-orange-200">GRC platform</dt><dd className="mt-1 text-white/90">Vanta</dd></div>
                    <div><dt className="font-semibold uppercase tracking-wider text-orange-200">Assessment partners</dt><dd className="mt-1 text-white/90">Prescient, Sensiba (per current internal records)</dd></div>
                    <div><dt className="font-semibold uppercase tracking-wider text-orange-200">Engagement</dt><dd className="mt-1 text-white/90">March 2024 to present</dd></div>
                    <div><dt className="font-semibold uppercase tracking-wider text-orange-200">Headcount</dt><dd className="mt-1 text-white/90">123 per client tracker</dd></div>
                  </dl>
                </aside>

                <div className="p-7 sm:p-10 lg:p-12">
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">Buried in HITRUST, understaffed on IT</p>
                  <h2 className="mt-4 text-3xl font-bold leading-tight text-primary sm:text-4xl">Buried in HITRUST, Understaffed on IT: How Vheda Health Made Com-Sec Part of the Team</h2>

                  <section className="mt-8"><h3 className="text-xl font-bold text-primary">Client overview</h3><ul className="mt-4 grid gap-3 text-slate-700 sm:grid-cols-2"><li><strong>Industry:</strong> HealthTech, virtual care</li><li><strong>Company:</strong> Vheda Health</li><li><strong>Services:</strong> vCISO, HITRUST readiness, managed IT, security operations, security awareness, vendor reviews, incident response, penetration-testing support</li><li><strong>GRC platform:</strong> Vanta</li><li><strong>Assessment partners:</strong> Prescient, Sensiba (per current internal records)</li><li><strong>Engagement:</strong> March 2024 to present</li><li><strong>Headcount:</strong> 123 per client tracker</li></ul></section>

                  <section className="mt-10 border-t border-slate-200 pt-10"><h3 className="text-xl font-bold text-primary">Executive summary</h3><p className="mt-4 leading-7 text-slate-600">Vheda Health delivers virtual-first chronic care, maternal health, and behavioral health programs for Medicaid, Medicare, and Special Needs Plan populations, making data protection, regulatory readiness, and health-plan trust critical to the business. The relationship with Com-Sec began through a long-standing professional connection between Vheda Health founder Shameet Luhar and Farbod, who first worked together at Deloitte in 2005. When the demands of HITRUST readiness outgrew Vheda Health’s internal capacity, Com-Sec was brought in to lead the effort.</p><p className="mt-4 leading-7 text-slate-600">What began as HITRUST support expanded into a broader security and IT partnership. Com-Sec now provides ongoing vCISO leadership, managed IT, security operations, vendor reviews, incident response support, security awareness, and penetration-testing support. A full-time Com-Sec IT support analyst works directly with Vheda Health, while monthly leadership meetings and participation in partner calls keep security, compliance, and IT priorities aligned.</p><p className="mt-4 leading-7 text-slate-600">Since the engagement began in March 2024, internal reporting has shown measurable progress, including an external security score improvement from 91 to 96, remediation of penetration-test findings, resolution of a security incident, centralized IT support, and continued advancement through the HITRUST validation process.</p></section>

                  <section className="mt-10 border-t border-slate-200 pt-10"><h3 className="text-xl font-bold text-primary">The challenge</h3><p className="mt-4 leading-7 text-slate-600">Vheda Health was managing a demanding HITRUST initiative while also supporting a growing workforce, member-facing technology, cloud infrastructure, payer requirements, and day-to-day IT operations. The workload had expanded beyond what the internal security function could efficiently manage alone.</p><p className="mt-4 leading-7 text-slate-600">At the same time, hundreds of users and devices had to be supported, payer security questionnaires and vendor reviews continued to arrive, and incident-response readiness had to be maintained. Device compliance visibility was limited, and key security activities were not yet centralized into a single operating process.</p><p className="mt-4 leading-7 text-slate-600">With the HITRUST assessment approaching, Vheda needed both strategic leadership and hands-on execution—someone to drive remediation, evidence, and assessment readiness forward without allowing daily security and IT responsibilities to fall behind.</p></section>

                  <section className="mt-10 border-t border-slate-200 pt-10"><h3 className="text-xl font-bold text-primary">Com-Sec&apos;s approach</h3><p className="mt-4 leading-7 text-slate-600">Com-Sec took an active role in running the HITRUST program while also becoming part of Vheda Health’s day-to-day security and IT operations. The team interpreted requirements, identified gaps, coordinated evidence, tracked remediation, and kept assessment work moving alongside Vheda’s internal owners.</p><p className="mt-4 leading-7 text-slate-600">The engagement expanded well beyond compliance. A full-time Com-Sec IT support analyst provides onsite support, while monthly leadership meetings and continuous communication keep priorities, risks, and open actions visible. Com-Sec also centralized support through Asana and Microsoft Teams, strengthened onboarding and offboarding, reviewed Intune enrollment and device compliance, and supported access management, vendor reviews, incident response, business continuity, cloud security, and recurring governance.</p><p className="mt-4 leading-7 text-slate-600">Security awareness and technical improvement were built into the program as well. Com-Sec launched phishing campaigns, recurring newsletters, and awareness communications, while also supporting penetration-test remediation, SecurityScorecard improvement, AWS and GuardDuty review, Vanta migration, and HITRUST assessment planning.</p></section>

                  <section className="mt-10 rounded-xl bg-slate-50 p-6 sm:p-8"><h3 className="text-xl font-bold text-primary">Results</h3><ul className="mt-5 grid gap-3 text-sm leading-6 text-slate-700 sm:grid-cols-2">{[
                    "External SecurityScorecard rating improved from 91 to 96",
                    "Security incidents resolved and documented",
                    "AWS: zero findings in February and March 2025",
                    "Four Thoropass issues remediated; remaining items assigned",
                    "Penetration-test findings remediated (March 2025)",
                    "HITRUST i1 eligibility confirmed, CSF subscription renewed",
                    "Centralized IT support running in Asana and Microsoft Teams",
                    "Full-time Com-Sec IT support analyst embedded on-site",
                    "Monthly security, compliance, and IT meetings with leadership",
                    "Partner-facing security and compliance support on demand",
                    "Security Champions program launched",
                    "Monthly risk-register updates and incident logging in place",
                    "123 users enrolled in Microsoft Intune, giving real visibility into device compliance",
                    "Vendor-security reviews, awareness training, phishing simulations, and security communications formalized",
                  ].map((result) => <li key={result} className="flex gap-3"><CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-accent" aria-hidden="true" /><span>{result}</span></li>)}</ul></section>

                  <section className="mt-10"><h3 className="text-xl font-bold text-primary">Why Com-Sec</h3><p className="mt-4 leading-7 text-slate-600">The relationship started on trust, but it grew because Com-Sec could execute, not just advise. Vheda needed executive security leadership, HITRUST, technical security, partner assurance, and daily IT operations handled by one accountable team — not five vendors it had to manage itself.</p></section>

                  <section className="mt-10 rounded-xl border border-orange-200 bg-orange-50 p-6"><p className="text-xs font-bold uppercase tracking-wider text-orange-700">Client perspective</p><blockquote className="mt-3 text-lg font-medium leading-7 text-primary">&quot;We were drowning in HITRUST when I called Farbod — not because I&apos;d shopped for vendors, but because I knew he&apos;d tell me the truth about what we actually needed. Two years later, Com-Sec doesn&apos;t feel outsourced. They&apos;ve got someone on our IT team full-time, they&apos;re in our leadership meetings every month, and when a health plan partner asks a hard question, they&apos;re already on the call.&quot;</blockquote><p className="mt-4 text-sm font-semibold text-slate-600">— Shameet Luhar, Founder, Vheda Health</p><p className="mt-3 text-sm italic text-slate-500">(Draft — send to Shameet for final wording approval before publishing.)</p></section>

                  <section className="mt-10 border-t border-slate-200 pt-10"><h3 className="text-xl font-bold text-primary">Call to action</h3><p className="mt-4 leading-7 text-slate-600">If HITRUST, security, and IT support are pulling your team in three directions at once, talk to Com-Sec about what &quot;embedded&quot; actually looks like.</p><Button className="mt-6 bg-accent text-white hover:bg-accent/90" asChild><Link to="/contact">Talk to Com-Sec <ArrowRight className="ml-2 h-4 w-4" /></Link></Button></section>

                  <section className="mt-10 rounded-xl border border-amber-300 bg-amber-50 p-6"><h3 className="text-xl font-bold text-amber-950">Still needed</h3><ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-6 text-amber-900"><li>Confirm current HITRUST certification status and exact validated-assessment result</li><li>Confirm engagement start date and current status</li><li>Permission to describe the 2005 Deloitte connection</li><li>Permission to describe the internal capacity challenge that led to the engagement</li><li>Permission to use Vheda Health&apos;s name and logo</li><li>Confirm the 91→96 score improvement is publishable</li><li>Confirm user/device counts are publishable</li><li>Any payer contract, market launch, or security review this program enabled</li><li>Estimated internal hours/hiring costs avoided</li></ul></section>

                  <section className="mt-10"><h3 className="text-xl font-bold text-primary">Sources</h3><ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-6 text-slate-600"><li><a className="text-accent underline" href="https://vheda.com/about/" target="_blank" rel="noreferrer">Vheda Health company overview</a></li><li><a className="text-accent underline" href="https://vheda.com/what-we-do/" target="_blank" rel="noreferrer">Vheda Health services and populations</a></li><li><a className="text-accent underline" href="https://www.canva.com/d/3_O_gcYpZ823UDQ" target="_blank" rel="noreferrer">Vheda Health Q1 2025 update in Canva</a></li><li><a className="text-accent underline" href="https://www.canva.com/d/eFhTcJpObouXoXp" target="_blank" rel="noreferrer">Vheda Health 2026 roadmap in Canva</a></li><li><a className="text-accent underline" href="https://app.notion.com/p/39982f7daf118162b284e62af3fad135?pvs=204" target="_blank" rel="noreferrer">Vheda Health client tracker in Notion</a></li></ul></section>

                  <section className="mt-10 rounded-xl border border-amber-300 bg-amber-50 p-6"><h3 className="text-xl font-bold text-amber-950">Publication checklist (before this goes live)</h3><ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-6 text-amber-900"><li>Confirm the client&apos;s legal and public-facing name</li><li>Confirm engagement dates and current status</li><li>Written permission to use company name and logo</li><li>Verify every audit, certification, score, finding count, date, customer reference, and measurable result</li><li>Approval before naming auditors, partners, customers, or platforms</li><li>Replace the draft quote with client-approved language and attribution</li><li>Remove internal pricing, staffing, health ratings, and confidential operating details</li><li>Final Com-Sec review before publication</li></ul></section>
                </div>
              </div>
            </article>
            )}
            </>
          ) : (
            <div className="mt-8">
              {categoryStudies.length > 0 ? (
                <div className="grid gap-6 md:grid-cols-2">
                  {categoryStudies.map((study) => (
                    <article key={study.id} className="group flex flex-col rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition-all hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl sm:p-8">
                      <div className="flex items-center justify-between gap-4">
                        <span className="text-xs font-bold uppercase tracking-[0.18em] text-accent">{category}</span>
                        <span className="text-xs font-medium text-slate-500">Case study</span>
                      </div>
                      <h2 className="mt-5 text-2xl font-bold leading-tight text-primary">{study.client}</h2>
                      <h3 className="mt-3 text-lg font-semibold leading-7 text-slate-700">{study.title}</h3>
                      <p className="mt-4 flex-1 leading-7 text-slate-600">{study.summary}</p>
                      <div className="mt-6 flex items-center justify-between gap-4 border-t border-slate-100 pt-5">
                        <span className="text-sm text-slate-500">{study.meta}</span>
                        <Link to={`/case-studies/${study.id}?category=${encodeURIComponent(category)}`} className="inline-flex items-center whitespace-nowrap text-sm font-semibold text-accent transition-colors group-hover:text-primary">Read case study <ArrowRight className="ml-2 h-4 w-4" /></Link>
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
