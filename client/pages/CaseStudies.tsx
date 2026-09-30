import { Button } from "@/components/ui/button";
import { Footer } from "@/components/Footer";
import { Navigation } from "@/components/Navigation";
import { ArrowRight, CheckCircle } from "lucide-react";
import { Link, useParams, useSearchParams } from "react-router-dom";

const categories = ["HealthTech", "InsurTech", "AgTech", "AI / SaaS", "Global Mobility", "FinTech", "Energy", "EdTech", "Services"] as const;
type Category = (typeof categories)[number];

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
      id: "rave-health",
      client: "Rave Health",
      title: "One Team for Compliance, Security, and IT",
      summary: "Rave Health needed a security partner that could support both compliance and day-to-day operations.",
      meta: "HealthTech · SOC 2 · Managed IT",
    },
    {
      id: "vheda-health",
      client: "Vheda Health",
      title: "From HITRUST Complexity to an Embedded Security & IT Partnership",
      summary: "How Vheda Health turned HITRUST readiness into an embedded security and IT partnership.",
      meta: "Virtual Care · HITRUST · Managed IT",
    },
  ],
  InsurTech: [
    {
      id: "glovebox",
      client: "GloveBox",
      title: "Building the Security Operations Behind Recurring SOC 2 Assurance",
      summary: "GloveBox partnered with Com-Sec to strengthen the operational foundation behind its SOC 2 program.",
      meta: "InsurTech · SOC 2 · Managed IT",
    },
  ],
  AgTech: [
    {
      id: "croptrak",
      client: "CropTrak",
      title: "Making Security Part of the Operating Rhythm at an Agricultural Technology Company",
      summary: "CropTrak works with customers that expect real, ongoing security assurance, not just a clean audit report once a year.",
      meta: "AgTech · SOC 2 · Managed IT",
    },
  ],
  "AI / SaaS": [
    {
      id: "connectlyai",
      client: "ConnectlyAI",
      title: "From ISO 27001 Readiness to Stage 2: A Focused Certification Program for a Fast-Moving AI Company",
      summary: "ConnectlyAI needed to prepare for ISO/IEC 27001:2022 without shifting the burden of running a certification program onto its engineering and product teams.",
      meta: "AI / SaaS · ISO/IEC 27001:2022 · Vanta",
    },
  ],
  "Global Mobility": [
    {
      id: "perchpeek",
      client: "PerchPeek",
      title: "A Complete Three-Year ISO 27001 Certification Cycle and Web Application Penetration Testing, Delivered in Focused Engagement Windows",
      summary: "PerchPeek is a relocation management company that supports employee moves across more than 150 countries, combining a coach-led service with its own mobility platform.",
      meta: "Global Mobility · ISO 27001 · Penetration testing",
    },
  ],
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

          {selectedStudy ? (
            <>
            {selectedStudy.id === "caryhealth" && (
            <article className="mt-10 overflow-hidden rounded-[1.75rem] border border-slate-200/80 bg-white shadow-[0_24px_70px_-34px_rgba(15,23,42,0.5)]">
              <div className="grid lg:grid-cols-[0.9fr_2.1fr]">
                <aside className="relative overflow-hidden bg-gradient-to-br from-primary via-blue-950 to-slate-950 p-7 text-white sm:p-10 lg:p-12">
                  <h2 className="text-3xl font-bold">CaryHealth</h2>
                  <div className="mt-4 inline-flex rounded-full border border-orange-300/30 bg-orange-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-orange-200">HealthTech</div>
                  <p className="mt-3 text-lg text-blue-100">Digital pharmacy</p>
                  <dl className="mt-10 space-y-5 border-t border-white/15 pt-6 text-sm">
                    <div><dt className="font-semibold uppercase tracking-wider text-orange-200">Industry</dt><dd className="mt-1 text-white/90">HealthTech, digital pharmacy</dd></div>
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

            {selectedStudy.id === "rave-health" && (
            <article className="mt-10 overflow-hidden rounded-[1.75rem] border border-slate-200/80 bg-white shadow-[0_24px_70px_-34px_rgba(15,23,42,0.5)]">
              <div className="grid lg:grid-cols-[0.9fr_2.1fr]">
                <aside className="relative overflow-hidden bg-gradient-to-br from-primary via-blue-950 to-slate-950 p-7 text-white sm:p-10 lg:p-12">
                  <h2 className="text-3xl font-bold">Rave Health</h2>
                  <div className="mt-4 inline-flex rounded-full border border-orange-300/30 bg-orange-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-orange-200">HealthTech</div>
                  <dl className="mt-10 space-y-5 border-t border-white/15 pt-6 text-sm">
                    <div><dt className="font-semibold uppercase tracking-wider text-orange-200">Industry</dt><dd className="mt-1 text-white/90">HealthTech</dd></div>
                    <div><dt className="font-semibold uppercase tracking-wider text-orange-200">GRC platform</dt><dd className="mt-1 text-white/90">Drata</dd></div>
                    <div><dt className="font-semibold uppercase tracking-wider text-orange-200">Auditor</dt><dd className="mt-1 text-white/90">Atom</dd></div>
                    <div><dt className="font-semibold uppercase tracking-wider text-orange-200">Engagement</dt><dd className="mt-1 text-white/90">August 2024 to present</dd></div>
                  </dl>
                </aside>

                <div className="p-7 sm:p-10 lg:p-14">
                  <h2 className="text-3xl font-bold leading-tight text-primary sm:text-4xl">One Team for Compliance, Security, and IT</h2>

                  <section className="mt-8"><h3 className="text-xl font-bold text-primary">Client Overview</h3><ul className="mt-4 grid gap-3 text-slate-700 sm:grid-cols-2"><li><strong>Industry:</strong> HealthTech</li><li><strong>Company:</strong> Rave Health</li><li><strong>Services:</strong> Managed IT, vCISO, SOC 2, penetration testing</li><li><strong>GRC platform:</strong> Drata</li><li><strong>Auditor:</strong> Atom</li><li><strong>Engagement:</strong> August 2024 to present</li></ul></section>

                  <section className="mt-10 border-t border-slate-200 pt-10"><h3 className="text-xl font-bold text-primary">Executive Summary</h3><p className="mt-4 text-lg leading-8 text-slate-700">Rave Health needed a security partner that could support both compliance and day-to-day operations. The company required SOC 2 guidance, penetration testing, executive-level security leadership, and ongoing IT support without adding the complexity of managing multiple separate providers.</p><p className="mt-4 leading-7 text-slate-600">Com-Sec brought those responsibilities together under one engagement. The team guided the SOC 2 program in Drata, coordinated with Atom throughout the audit, supported evidence collection and remediation, delivered penetration testing, and remained involved in recurring IT and security operations.</p><p className="mt-4 leading-7 text-slate-600">As Rave Health moved through the final stage of its SOC 2 audit, Com-Sec continued working through the remaining findings and providing the supporting evidence needed for closure. Because the same team understood both the technical environment and the compliance program, issues could be addressed with more context and fewer handoffs between vendors.</p></section>

                  <div className="mt-10 grid gap-8 border-t border-slate-200 pt-10 lg:grid-cols-2">
                    <section><h3 className="text-xl font-bold text-primary">The Challenge</h3><p className="mt-3 leading-7 text-slate-600">Rave Health needed to strengthen several areas at the same time: SOC 2 compliance, penetration testing, executive-level security guidance, and everyday IT support.</p><p className="mt-3 leading-7 text-slate-600">For a lean team, managing each of those functions through separate providers would have added unnecessary coordination, handoffs, and overhead.</p><p className="mt-3 leading-7 text-slate-600">The SOC 2 program required ongoing attention across Drata, evidence collection, control remediation, access reviews, policies, and auditor requests. At the same time, technical security needed to be validated through penetration testing while day-to-day IT issues continued to require support.</p><p className="mt-3 leading-7 text-slate-600">The challenge was finding a model that could connect compliance, technical security, and IT operations rather than treating them as separate projects. Rave Health needed consistent ownership and a team that understood both its audit requirements and the technical environment behind them.</p></section>
                    <section><h3 className="text-xl font-bold text-primary">Com-Sec&apos;s Approach</h3><p className="mt-3 leading-7 text-slate-600">Com-Sec brought Rave Health&apos;s compliance, technical security, and IT needs together under one operating model.</p><p className="mt-3 leading-7 text-slate-600">Monthly meetings created a consistent cadence for reviewing SOC 2 progress, open risks, remediation items, and upcoming priorities. Ad hoc sessions provided additional space to work through deeper technical topics such as AWS configuration and cloud security.</p><p className="mt-3 leading-7 text-slate-600">Day-to-day communication stayed active through Slack, giving Rave Health a direct channel for questions, operational issues, and time-sensitive security concerns.</p><p className="mt-3 leading-7 text-slate-600">Com-Sec also supported the broader security culture through recurring newsletters and phishing campaigns designed to keep employees engaged and strengthen security awareness between formal training cycles.</p><p className="mt-3 leading-7 text-slate-600">Monthly reporting tied the program together by giving Rave Health clear visibility into ongoing security and compliance work. Alongside that reporting, Com-Sec continued guiding the SOC 2 program, coordinating with Atom, supporting evidence collection and remediation, delivering penetration testing, and staying involved in recurring IT and security operations.</p></section>
                  </div>

                  <section className="mt-10 rounded-xl bg-slate-50 p-6 sm:p-8"><h3 className="text-xl font-bold text-primary">Results</h3><ul className="mt-5 grid gap-3 text-sm leading-6 text-slate-700 sm:grid-cols-2">{[
                    "SOC 2 remediation progressed from multiple open findings to one remaining evidence item in the latest internal record.",
                    "Ongoing remediation, evidence collection, and control validation supported, including direct coordination with the auditor.",
                    "Penetration testing incorporated into the security program, with identified findings remediated.",
                    "Ongoing vCISO guidance, IT support, audit coordination, and security operations established under one team.",
                    "Consistent support provided across strategic security initiatives and day-to-day operational needs since August 2024.",
                  ].map((result) => <li key={result} className="flex gap-3"><CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-accent" aria-hidden="true" /><span>{result}</span></li>)}</ul></section>

                  <section className="mt-10"><h3 className="text-xl font-bold text-primary">Why Com-Sec</h3><p className="mt-4 leading-7 text-slate-600">Rave Health didn&apos;t have to translate between an auditor, a penetration tester, an IT provider, and a strategic advisor.</p><p className="mt-4 leading-7 text-slate-600">Com-Sec connected the work and kept the program moving. Instead of treating compliance, technical security, and IT as separate projects, the engagement gave Rave Health one team with context across all three.</p></section>

                  <section className="mt-10 rounded-xl border border-orange-200 bg-orange-50 p-6"><p className="text-xs font-bold uppercase tracking-wider text-orange-700">Client Perspective</p><blockquote className="mt-3 text-lg font-medium leading-7 text-primary">&quot;Com-Sec gives us one team for the security work that would otherwise be spread across several providers. They understand the audit, the technology, and what our team needs day to day.&quot;</blockquote><p className="mt-4 text-sm font-semibold text-slate-600"><span className="block">Richard Kaskel</span><span className="block">CEO, Rave Health</span></p></section>

                  <section className="mt-10 border-t border-slate-200 pt-10"><h3 className="text-xl font-bold text-primary">Build security without managing multiple providers</h3><p className="mt-4 leading-7 text-slate-600">Need a security program that connects compliance, technical security, and day-to-day IT operations? <Link to="/contact" className="font-semibold text-accent underline underline-offset-4 hover:text-primary">Talk to Com-Sec</Link>.</p></section>
                </div>
              </div>
            </article>
            )}

            {selectedStudy.id === "glovebox" && (
            <article className="mt-10 overflow-hidden rounded-[1.75rem] border border-slate-200/80 bg-white shadow-[0_24px_70px_-34px_rgba(15,23,42,0.5)]">
              <div className="grid lg:grid-cols-[0.9fr_2.1fr]">
                <aside className="relative overflow-hidden bg-gradient-to-br from-primary via-blue-950 to-slate-950 p-7 text-white sm:p-10 lg:p-12">
                  <h2 className="text-3xl font-bold">GloveBox</h2>
                  <div className="mt-4 inline-flex rounded-full border border-orange-300/30 bg-orange-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-orange-200">InsurTech</div>
                  <dl className="mt-10 space-y-5 border-t border-white/15 pt-6 text-sm">
                    <div><dt className="font-semibold uppercase tracking-wider text-orange-200">Industry</dt><dd className="mt-1 text-white/90">InsurTech</dd></div>
                    <div><dt className="font-semibold uppercase tracking-wider text-orange-200">GRC platform</dt><dd className="mt-1 text-white/90">Drata</dd></div>
                    <div><dt className="font-semibold uppercase tracking-wider text-orange-200">Audit partner</dt><dd className="mt-1 text-white/90">Sensiba</dd></div>
                    <div><dt className="font-semibold uppercase tracking-wider text-orange-200">Partner</dt><dd className="mt-1 text-white/90">IRU MDM</dd></div>
                    <div><dt className="font-semibold uppercase tracking-wider text-orange-200">Engagement</dt><dd className="mt-1 text-white/90">September 2024 to present</dd></div>
                  </dl>
                </aside>

                <div className="p-7 sm:p-10 lg:p-14">
                  <h2 className="text-3xl font-bold leading-tight text-primary sm:text-4xl">Building the Security Operations Behind Recurring SOC 2 Assurance</h2>

                  <section className="mt-8"><h3 className="text-xl font-bold text-primary">Client Overview</h3><ul className="mt-4 grid gap-3 text-slate-700 sm:grid-cols-2"><li><strong>Industry:</strong> InsurTech</li><li><strong>Company:</strong> GloveBox</li><li><strong>Services:</strong> vCISO, managed IT, SOC 2, penetration testing</li><li><strong>GRC platform:</strong> Drata</li><li><strong>Audit partner:</strong> Sensiba</li><li><strong>Partner:</strong> IRU MDM</li><li><strong>Engagement:</strong> September 2024 to present</li></ul></section>

                  <section className="mt-10 border-t border-slate-200 pt-10"><h3 className="text-xl font-bold text-primary">Executive Summary</h3><p className="mt-4 text-lg leading-8 text-slate-700">GloveBox partnered with Com-Sec to strengthen the operational foundation behind its SOC 2 program. Rather than treating compliance as a once-a-year audit activity, Com-Sec helped turn security requirements into repeatable processes across policies, access management, employee lifecycle workflows, endpoint support, technical testing, and evidence management.</p><p className="mt-4 leading-7 text-slate-600">Through one engagement, Com-Sec supported vCISO guidance, managed IT, Drata oversight, SSO initiatives, penetration testing, and recurring security operations. This gave GloveBox a more connected model for managing compliance and security work across the year.</p><p className="mt-4 leading-7 text-slate-600">The result is a program where audit readiness is supported by everyday operational practices, helping GloveBox maintain better alignment between its controls, systems, employees, and evidence.</p></section>

                  <div className="mt-10 grid gap-8 border-t border-slate-200 pt-10 lg:grid-cols-2">
                    <section><h3 className="text-xl font-bold text-primary">The Challenge</h3><p className="mt-3 leading-7 text-slate-600">GloveBox needed a security program that could support recurring SOC 2 assurance while also keeping pace with day-to-day operational needs. The company’s controls were not limited to policy documents or annual audit evidence; they depended on whether access, devices, applications, employee changes, and security testing were consistently managed.</p><p className="mt-3 leading-7 text-slate-600">For a growing InsurTech team, this created several connected challenges. Policies needed to move through approval and publication. Drata needed ongoing review and evidence support. SSO coverage had to be advanced across critical applications. Onboarding and offboarding processes needed to support timely access provisioning and removal. Endpoint support and MDM-related work also needed to be tied back to the broader security program.</p><p className="mt-3 leading-7 text-slate-600">The challenge was not simply completing SOC 2 tasks. It was building an operating model where compliance, IT, and security worked together continuously enough to support audit readiness and reduce last-minute evidence gaps.</p></section>
                    <section><h3 className="text-xl font-bold text-primary">Com-Sec’s Approach</h3><p className="mt-3 leading-7 text-slate-600">Com-Sec helped GloveBox connect executive-level security guidance with hands-on operational execution. Instead of treating SOC 2, IT support, endpoint management, SSO, and penetration testing as separate efforts, Com-Sec supported them as parts of the same security program.</p><p className="mt-3 leading-7 text-slate-600">The team helped move policies through approval and publication, monitored the program in Drata, supported evidence collection and control readiness, and helped keep audit-related work visible as part of recurring operations. Com-Sec also advanced SSO implementation for critical applications and supported the design of employee lifecycle processes so that onboarding and offboarding could better align with access control requirements.</p><p className="mt-3 leading-7 text-slate-600">On the technical side, Com-Sec delivered penetration testing and helped integrate the results into the broader remediation and compliance program. Recurring IT support helped address the operational issues that directly affect security controls, including endpoint support, access management, and user lifecycle needs.</p><p className="mt-3 leading-7 text-slate-600">This model gave GloveBox one team that understood both the compliance expectations and the operational systems behind them.</p></section>
                  </div>

                  <section className="mt-10 rounded-xl bg-slate-50 p-6 sm:p-8"><h3 className="text-xl font-bold text-primary">Results</h3><ul className="mt-5 grid gap-3 text-sm leading-6 text-slate-700 sm:grid-cols-2">{[
                    "Policies moved through approval and publication to support SOC 2 readiness.",
                    "Drata oversight became part of recurring security and compliance operations.",
                    "SSO work advanced for critical applications.",
                    "Onboarding and offboarding processes were designed to better support access control and evidence expectations.",
                    "Penetration testing was incorporated into the security program.",
                    "Recurring IT support was connected to compliance and security operations.",
                    "vCISO, managed IT, SOC 2 support, and technical testing were brought together under one operating model.",
                  ].map((result) => <li key={result} className="flex gap-3"><CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-accent" aria-hidden="true" /><span>{result}</span></li>)}</ul></section>

                  <section className="mt-10"><h3 className="text-xl font-bold text-primary">Why Com-Sec</h3><p className="mt-4 leading-7 text-slate-600">GloveBox did not need a compliance advisor who only reviewed policies once a year. It needed a team that could help connect policies, systems, users, evidence, and technical validation.</p><p className="mt-4 leading-7 text-slate-600">Com-Sec connected the executive security program to the operational details. For GloveBox, that meant helping controls work across access management, employee lifecycle processes, endpoint support, audit evidence, Drata monitoring, and penetration testing, not just appear complete in an audit binder.</p></section>

                  <section className="mt-10 rounded-xl border border-orange-200 bg-orange-50 p-6"><p className="text-xs font-bold uppercase tracking-wider text-orange-700">Client Perspective</p><blockquote className="mt-3 text-lg font-medium leading-7 text-primary">&quot;Com-Sec helps us turn SOC 2 requirements into day-to-day security operations. They support the audit work, the technical controls, and the IT processes that keep the program running throughout the year.&quot;</blockquote><p className="mt-4 text-sm font-semibold text-slate-600"><span className="block">Ryan Mathisen</span><span className="block">CEO, GloveBox</span></p></section>

                  <section className="mt-10 border-t border-slate-200 pt-10"><h3 className="text-xl font-bold text-primary">Build security that works beyond the audit</h3><p className="mt-4 leading-7 text-slate-600">If your policies say one thing and daily operations do another, <Link to="/contact" className="font-semibold text-accent underline underline-offset-4 hover:text-primary">talk to Com-Sec</Link>.</p></section>

                </div>
              </div>
            </article>
            )}

            {selectedStudy.id === "croptrak" && (
            <article className="mt-10 overflow-hidden rounded-[1.75rem] border border-slate-200/80 bg-white shadow-[0_24px_70px_-34px_rgba(15,23,42,0.5)]">
              <div className="grid lg:grid-cols-[0.9fr_2.1fr]">
                <aside className="relative overflow-hidden bg-gradient-to-br from-primary via-blue-950 to-slate-950 p-7 text-white sm:p-10 lg:p-12">
                  <h2 className="text-3xl font-bold">CropTrak</h2>
                  <div className="mt-4 inline-flex rounded-full border border-orange-300/30 bg-orange-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-orange-200">AgTech</div>
                  <dl className="mt-10 space-y-5 border-t border-white/15 pt-6 text-sm">
                    <div><dt className="font-semibold uppercase tracking-wider text-orange-200">Industry</dt><dd className="mt-1 text-white/90">AgTech</dd></div>
                    <div><dt className="font-semibold uppercase tracking-wider text-orange-200">GRC platform</dt><dd className="mt-1 text-white/90">Drata</dd></div>
                    <div><dt className="font-semibold uppercase tracking-wider text-orange-200">Audit partner</dt><dd className="mt-1 text-white/90">Sensiba LLC</dd></div>
                    <div><dt className="font-semibold uppercase tracking-wider text-orange-200">Engagement</dt><dd className="mt-1 text-white/90">October 2024 to present</dd></div>
                  </dl>
                </aside>

                <div className="p-7 sm:p-10 lg:p-14">
                  <h2 className="text-3xl font-bold leading-tight text-primary sm:text-4xl">Making Security Part of the Operating Rhythm at an Agricultural Technology Company</h2>

                  <section className="mt-8"><h3 className="text-xl font-bold text-primary">Client Overview</h3><ul className="mt-4 grid gap-3 text-slate-700 sm:grid-cols-2"><li><strong>Industry:</strong> AgTech</li><li><strong>Company:</strong> CropTrak</li><li><strong>Services:</strong> vCISO, SOC 2, managed IT, security operations, penetration testing</li><li><strong>GRC platform:</strong> Drata</li><li><strong>Audit partner:</strong> Sensiba LLC</li><li><strong>Engagement:</strong> October 2024 to present</li></ul></section>

                  <section className="mt-10 border-t border-slate-200 pt-10"><h3 className="text-xl font-bold text-primary">Executive Summary</h3><p className="mt-4 text-lg leading-8 text-slate-700">CropTrak works with customers that expect real, ongoing security assurance, not just a clean audit report once a year. For a company operating in a compliance-sensitive environment, SOC 2 cannot be treated as an annual documentation exercise. The controls have to be reflected in the way the business operates every day: how devices are secured, how access is granted and reviewed, how employees are supported, how security issues are handled, and how technology decisions are made over time.</p><p className="mt-4 leading-7 text-slate-600">Com-Sec helped turn those requirements into an operating rhythm that could be sustained throughout the year. That included ongoing vCISO leadership, continuous SOC 2 control maintenance in Drata, coordination with auditors and internal stakeholders, EDR implementation and endpoint security improvements, recurring user access reviews, and day-to-day IT and security guidance. Instead of allowing evidence collection, control reviews, and remediation work to pile up before an audit, Com-Sec helped integrate those activities into normal business operations.</p><p className="mt-4 leading-7 text-slate-600">The result was a more consistent security program with clearer ownership, stronger control visibility, and less dependence on last-minute audit preparation. Security and compliance became part of CropTrak’s regular operating model rather than a seasonal project, giving the company a more practical way to maintain SOC 2 readiness while also improving the underlying security posture that customers rely on.</p></section>

                  <div className="mt-10 grid gap-8 border-t border-slate-200 pt-10 lg:grid-cols-2">
                    <section><h3 className="text-xl font-bold text-primary">The Challenge</h3><p className="mt-3 leading-7 text-slate-600">A major challenge for CropTrak was the amount of ongoing security work required outside the audit itself. Customer security questionnaires, evidence requests, access reviews, and IT administration all demanded consistent attention and clear documentation.</p><p className="mt-3 leading-7 text-slate-600">Drata helped provide continuous visibility into compliance by centralizing control monitoring, evidence collection, and CSPM oversight. This made it easier to identify gaps early and maintain security standards throughout the year instead of waiting until audit season.</p><p className="mt-3 leading-7 text-slate-600">At the same time, recurring IT tasks such as user access changes, endpoint support, and account management needed to stay aligned with those controls. The goal was to connect day-to-day operations with the broader compliance program so that security requirements were consistently maintained in practice.</p></section>
                    <section><h3 className="text-xl font-bold text-primary">Com-Sec&apos;s Approach</h3><p className="mt-3 leading-7 text-slate-600">Com-Sec helped CropTrak build a year-round operating rhythm around security and compliance. A structured roadmap established priorities and gave the team a clear view of upcoming initiatives, while biweekly meetings created a regular cadence for reviewing progress, addressing open issues, and adjusting priorities as needed.</p><p className="mt-3 leading-7 text-slate-600">SCC meetings added another layer of accountability by bringing key stakeholders together to review security and compliance topics. Meeting notes, action items, and follow-ups helped keep responsibilities visible and ensured that important tasks did not get lost between audit cycles. This structure supported ongoing work in Drata, audit coordination, MDM implementation, access reviews, and recurring IT and security guidance.</p><p className="mt-3 leading-7 text-slate-600">Com-Sec also reinforced the program through continuous security awareness efforts. Phishing simulations, security newsletters, and annual awareness training helped keep security top of mind for employees throughout the year, extending the program beyond technical controls and making security part of CropTrak’s day-to-day culture.</p></section>
                  </div>

                  <section className="mt-10 rounded-xl bg-slate-50 p-6 sm:p-8"><h3 className="text-xl font-bold text-primary">Results</h3><ul className="mt-5 grid gap-3 text-sm leading-6 text-slate-700 sm:grid-cols-2">{[
                    "Achieved and maintained SOC 2 compliance with year-round control maintenance, evidence management, remediation, and audit coordination.",
                    "Established a biweekly security and compliance cadence with documented action items, ownership, and follow-up.",
                    "Integrated recurring access reviews into normal business operations.",
                    "Implemented EDR and incorporated endpoint protection into ongoing security operations.",
                    "Maintained active Drata monitoring to keep controls and evidence current throughout the year.",
                    "Established ongoing security awareness through annual training, phishing simulations, and recurring security communications.",
                    "Centralized IT and security support through Com-Sec, giving CropTrak one team for compliance, customer assurance, and day-to-day security operations.",
                  ].map((result) => <li key={result} className="flex gap-3"><CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-accent" aria-hidden="true" /><span>{result}</span></li>)}</ul></section>

                  <section className="mt-10"><h3 className="text-xl font-bold text-primary">Why Com-Sec</h3><p className="mt-4 leading-7 text-slate-600">Com-Sec helps growing companies run security between audits, not just before them.</p><p className="mt-4 leading-7 text-slate-600">For CropTrak, that meant connecting executive oversight, compliance, devices, access, and daily operations into one rhythm.</p></section>

                  <section className="mt-10 rounded-xl border border-orange-200 bg-orange-50 p-6"><p className="text-xs font-bold uppercase tracking-wider text-orange-700">Client Perspective</p><blockquote className="mt-3 text-lg font-medium leading-7 text-primary">&quot;Com-Sec helped us make security part of how we operate instead of something we scramble to address before an audit.&quot;</blockquote><p className="mt-4 text-sm font-semibold text-slate-600"><span className="block">Brandon Frye</span><span className="block">CTO, CropTrak</span></p></section>

                  <section className="mt-10 border-t border-slate-200 pt-10"><h3 className="text-xl font-bold text-primary">Keep security running between audits</h3><p className="mt-4 leading-7 text-slate-600">If your security program disappears between audit periods, <Link to="/contact" className="font-semibold text-accent underline underline-offset-4 hover:text-primary">talk to Com-Sec</Link>.</p></section>

                  <section className="mt-10"><h3 className="text-xl font-bold text-primary">Sources</h3><ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-6 text-slate-600"><li>CropTrak SOC 2 Maintenance Plan — Canva</li><li>CropTrak Roadmap — Canva</li><li>CropTrak SCC Meeting Notes — Google Drive</li><li>CropTrak Drata</li></ul></section>
                </div>
              </div>
            </article>
            )}

            {selectedStudy.id === "connectlyai" && (
            <article className="mt-10 overflow-hidden rounded-[1.75rem] border border-slate-200/80 bg-white shadow-[0_24px_70px_-34px_rgba(15,23,42,0.5)]">
              <div className="grid lg:grid-cols-[0.9fr_2.1fr]">
                <aside className="relative overflow-hidden bg-gradient-to-br from-primary via-blue-950 to-slate-950 p-7 text-white sm:p-10 lg:p-12">
                  <h2 className="text-3xl font-bold">ConnectlyAI</h2>
                  <div className="mt-4 inline-flex rounded-full border border-orange-300/30 bg-orange-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-orange-200">AI / SaaS</div>
                  <dl className="mt-10 space-y-5 border-t border-white/15 pt-6 text-sm">
                    <div><dt className="font-semibold uppercase tracking-wider text-orange-200">Industry</dt><dd className="mt-1 text-white/90">AI / SaaS</dd></div>
                    <div><dt className="font-semibold uppercase tracking-wider text-orange-200">GRC platform</dt><dd className="mt-1 text-white/90">Vanta</dd></div>
                    <div><dt className="font-semibold uppercase tracking-wider text-orange-200">Engagement model</dt><dd className="mt-1 text-white/90">Project-based ISO 27001 engagement</dd></div>
                    <div><dt className="font-semibold uppercase tracking-wider text-orange-200">External assessment</dt><dd className="mt-1 text-white/90">Stage 1 and Stage 2 certification audit</dd></div>
                    <div><dt className="font-semibold uppercase tracking-wider text-orange-200">Engagement</dt><dd className="mt-1 text-white/90">Completed April 2026</dd></div>
                  </dl>
                </aside>

                <div className="p-7 sm:p-10 lg:p-14">
                  <h2 className="text-3xl font-bold leading-tight text-primary sm:text-4xl">From ISO 27001 Readiness to Stage 2: A Focused Certification Program for a Fast-Moving AI Company</h2>

                  <section className="mt-8"><h3 className="text-xl font-bold text-primary">Client Overview</h3><ul className="mt-4 grid gap-3 text-slate-700 sm:grid-cols-2"><li><strong>Industry:</strong> AI / SaaS</li><li><strong>Company:</strong> ConnectlyAI</li><li><strong>Services:</strong> ISO/IEC 27001:2022 readiness, control implementation, internal audit, remediation support, and external audit coordination</li><li><strong>GRC platform:</strong> Vanta</li><li><strong>Engagement model:</strong> Project-based ISO 27001 engagement</li><li><strong>External assessment:</strong> Stage 1 and Stage 2 certification audit</li><li><strong>Engagement:</strong> Completed April 2026</li></ul></section>

                  <section className="mt-10 border-t border-slate-200 pt-10"><h3 className="text-xl font-bold text-primary">Executive Summary</h3><p className="mt-4 text-lg leading-8 text-slate-700">ConnectlyAI needed to prepare for ISO/IEC 27001:2022 without shifting the burden of running a certification program onto its engineering and product teams.</p><p className="mt-4 leading-7 text-slate-600">Com-Sec managed the engagement as a focused ISO 27001 project, working with Connectly to establish and document its ISMS, map and implement applicable controls, organize evidence in Vanta, conduct the internal audit, identify and remediate gaps, and coordinate preparation for the independent Stage 1 and Stage 2 audits.</p><p className="mt-4 leading-7 text-slate-600">The work extended beyond policy documentation. Com-Sec worked with Connectly teams on operational evidence and control implementation across areas including incident response, business continuity and disaster recovery, risk management, personnel security, device security, secure development, vulnerability management, access controls, supplier security, information deletion, and regulatory and authority contacts.</p><p className="mt-4 leading-7 text-slate-600">Following the Stage 2 audit, Com-Sec coordinated remediation of the remaining audit findings, updated the corrective action records, and supported submission of the final evidence for auditor review.</p></section>

                  <div className="mt-10 grid gap-8 border-t border-slate-200 pt-10 lg:grid-cols-2">
                    <section><h3 className="text-xl font-bold text-primary">The Challenge</h3><p className="mt-3 leading-7 text-slate-600">ISO 27001 requires more than having security tools and policies in place. An organization must demonstrate that its ISMS operates consistently, controls are implemented as stated, responsibilities are assigned, risks are managed, and sufficient evidence exists to support independent assessment.</p><p className="mt-3 leading-7 text-slate-600">For a fast-moving AI and SaaS company, the challenge was turning existing engineering and security practices into a structured, auditable ISO 27001 program without requiring the internal team to become compliance specialists.</p><p className="mt-3 leading-7 text-slate-600">Connectly needed a clear path from readiness through internal audit, Stage 1, remediation, Stage 2, and final corrective actions.</p></section>
                    <section><h3 className="text-xl font-bold text-primary">Com-Sec&apos;s Approach</h3><p className="mt-3 leading-7 text-slate-600">Com-Sec structured the engagement around the full ISO/IEC 27001:2022 certification lifecycle.</p><p className="mt-3 leading-7 text-slate-600">The team reviewed and refined Connectly&apos;s ISMS documentation and policies, evaluated Annex A control implementation, organized control evidence through Vanta, and worked directly with the relevant engineering, HR, security, and management stakeholders to resolve evidence and implementation gaps.</p><p className="mt-3 leading-7 text-slate-600">Com-Sec then conducted the ISO 27001 internal audit, documented findings and observations, and worked with Connectly to remediate identified gaps before the external assessment.</p><p className="mt-3 leading-7 text-slate-600">Preparation also included supporting practical security activities and evidence across areas such as incident response testing, BC/DR exercises, risk assessment and treatment, employee screening and competency, endpoint security, vulnerability and security scanning, secure engineering practices, information deletion, supplier management, and contact with relevant authorities.</p><p className="mt-3 leading-7 text-slate-600">Com-Sec supported the external audit process through Stage 1 and Stage 2, responding to evidence requests, coordinating remediation, and helping Connectly address the final audit findings through documented root-cause analysis, corrective actions, ownership, and supporting evidence.</p></section>
                  </div>

                  <section className="mt-10 rounded-xl bg-slate-50 p-6 sm:p-8"><h3 className="text-xl font-bold text-primary">Results</h3><ul className="mt-5 grid gap-3 text-sm leading-6 text-slate-700 sm:grid-cols-2">{[
                    "ISO/IEC 27001:2022 readiness program carried through internal audit, Stage 1, Stage 2, and post-audit remediation.",
                    "ISMS policies, controls, risks, and supporting evidence centralized and managed through Vanta.",
                    "ISO 27001 internal audit completed, with findings translated into actionable remediation items.",
                    "Stage 1 audit observations and corrective actions addressed ahead of Stage 2.",
                    "Stage 2 corrective actions completed for identified findings, including Contact with Authorities (Control 5.5), Information Deletion (Control 8.10), and Screening (Control 6.1).",
                    "Corrective Action Report updated and accepted by the auditor, with remediation evidence submitted for closure.",
                    "Operational security activities incorporated into the certification program, including incident response, BC/DR, risk management, personnel security, secure engineering, vulnerability management, and information deletion.",
                    "Internal engineering and business teams retained ownership of their systems while Com-Sec drove the compliance and audit workstream.",
                  ].map((result) => <li key={result} className="flex gap-3"><CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-accent" aria-hidden="true" /><span>{result}</span></li>)}</ul></section>

                  <section className="mt-10"><h3 className="text-xl font-bold text-primary">Why Com-Sec</h3><p className="mt-4 leading-7 text-slate-600">Connectly didn&apos;t need an ongoing compliance department added to its organization. It needed a team that could take a defined ISO 27001 objective and drive it from readiness through audit.</p><p className="mt-4 leading-7 text-slate-600">Com-Sec connected the standard&apos;s requirements with Connectly&apos;s actual engineering and business practices, translated audit requirements into specific actions for internal owners, reviewed the resulting evidence, and coordinated the certification process through Stage 2 and remediation.</p><p className="mt-4 leading-7 text-slate-600">The result was a structured, project-based engagement with a clear objective and finish line rather than an open-ended compliance commitment.</p></section>

                  <section className="mt-10 rounded-xl border border-orange-200 bg-orange-50 p-6"><p className="text-xs font-bold uppercase tracking-wider text-orange-700">Client Perspective</p><blockquote className="mt-3 text-lg font-medium leading-7 text-primary">&quot;Com-Sec helped us turn ISO 27001 into a structured project with clear ownership and a defined path through readiness, internal audit, and external assessment. Their team worked directly with ours to keep evidence, remediation, and audit requirements moving together.&quot;</blockquote><p className="mt-4 text-sm font-semibold text-slate-600"><span className="block">ConnectlyAI</span></p></section>

                  <section className="mt-10 border-t border-slate-200 pt-10"><h3 className="text-xl font-bold text-primary">Take ISO 27001 from readiness through audit</h3><p className="mt-4 leading-7 text-slate-600">If ISO 27001 is becoming a second roadmap for your engineering team, <Link to="/contact" className="font-semibold text-accent underline underline-offset-4 hover:text-primary">Com-Sec can help take it from readiness through audit</Link>.</p></section>

                  <section className="mt-10"><h3 className="text-xl font-bold text-primary">Sources</h3><ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-6 text-slate-600"><li>Connectly ISO/IEC 27001:2022 internal audit and remediation records</li><li>Vanta compliance and evidence records</li><li>Stage 1 and Stage 2 audit records</li><li>ISO 27001 Corrective Action Report / findings sheet</li><li>Connectly security and ISMS documentation</li><li>Final certification documentation</li><li>Client verification and publication approval</li></ul></section>
                </div>
              </div>
            </article>
            )}

            {selectedStudy.id === "perchpeek" && (
            <article className="mt-10 overflow-hidden rounded-[1.75rem] border border-slate-200/80 bg-white shadow-[0_24px_70px_-34px_rgba(15,23,42,0.5)]">
              <div className="grid lg:grid-cols-[0.9fr_2.1fr]">
                <aside className="relative overflow-hidden bg-gradient-to-br from-primary via-blue-950 to-slate-950 p-7 text-white sm:p-10 lg:p-12">
                  <h2 className="text-3xl font-bold">PerchPeek</h2>
                  <div className="mt-4 inline-flex rounded-full border border-orange-300/30 bg-orange-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-orange-200">Global Mobility</div>
                  <dl className="mt-10 space-y-5 border-t border-white/15 pt-6 text-sm">
                    <div><dt className="font-semibold uppercase tracking-wider text-orange-200">Industry</dt><dd className="mt-1 text-white/90">Global mobility, employee relocation management, and relocation technology</dd></div>
                    <div><dt className="font-semibold uppercase tracking-wider text-orange-200">GRC platform</dt><dd className="mt-1 text-white/90">Drata</dd></div>
                    <div><dt className="font-semibold uppercase tracking-wider text-orange-200">Assessment partner</dt><dd className="mt-1 text-white/90">Prescient Security</dd></div>
                    <div><dt className="font-semibold uppercase tracking-wider text-orange-200">Engagement</dt><dd className="mt-1 text-white/90">January 2024 to present</dd></div>
                  </dl>
                </aside>

                <div className="p-7 sm:p-10 lg:p-14">
                  <h2 className="text-3xl font-bold leading-tight text-primary sm:text-4xl">A Complete Three-Year ISO 27001 Certification Cycle and Web Application Penetration Testing, Delivered in Focused Engagement Windows</h2>

                  <section className="mt-8"><h3 className="text-xl font-bold text-primary">Client Overview</h3><ul className="mt-4 grid gap-3 text-slate-700 sm:grid-cols-2"><li><strong>Industry:</strong> Global mobility, employee relocation management, and relocation technology</li><li><strong>Company:</strong> PerchPeek</li><li><strong>Services:</strong> ISO 27001 readiness plus web application penetration testing as an add-on service</li><li><strong>GRC platform:</strong> Drata</li><li><strong>Assessment partner:</strong> Prescient Security</li><li><strong>Engagement:</strong> January 2024 to present, covering the full three-year ISO 27001 certification cycle</li></ul></section>

                  <section className="mt-10 border-t border-slate-200 pt-10"><h3 className="text-xl font-bold text-primary">Executive Summary</h3><p className="mt-4 text-lg leading-8 text-slate-700">PerchPeek is a relocation management company that supports employee moves across more than 150 countries, combining a coach-led service with its own mobility platform. That business model puts PerchPeek inside the HR and people data of large enterprise customers, in multiple jurisdictions at once, which means security questions arrive early in the sales cycle and rarely stop at a policy document.</p><p className="mt-4 leading-7 text-slate-600">PerchPeek first came to Com-Sec in January 2024 with a clear goal: achieving ISO 27001 certification, and one clear constraint. The team did not want a year-long compliance program running in the background. They wanted a focused push, get the readiness work done properly, meet the auditor, and get back to building the product. Com-Sec designed the engagement around that reality rather than around a standard retainer and delivered the certification readiness inside a three-month window.</p><p className="mt-4 leading-7 text-slate-600">PerchPeek liked how the first cycle ran and came back the following year, and the year after that. What started as a single certification project became a three-year relationship covering the complete ISO 27001 cycle. Initial certification was achieved in 2024, the first surveillance audit followed in 2025, and the second surveillance audit in 2026, with the auditor confirming PerchPeek as ISO 27001 certified across the three-year period.</p><p className="mt-4 leading-7 text-slate-600">Each year followed the same rhythm. Com-Sec re-engaged for a short, intensive window, reviewed every control with the client, prepared the evidence, sat down with the auditors at Prescient Security to walk the control set, and closed out whatever the review surfaced. Findings that could not be fully closed in the current window were carried forward and remediated in the next one, so nothing was lost between engagements.</p><p className="mt-4 leading-7 text-slate-600">Alongside the certification work, PerchPeek added a web application penetration test as an additional Com-Sec service. Running it in parallel with the ISO 27001 readiness was deliberate. The certificate demonstrated that the management system worked; the penetration test provided technical validation of the platform behind it. PerchPeek wanted both answers in the same window, from one team that understood both.</p><p className="mt-4 leading-7 text-slate-600">Three cycles in, the model has held. PerchPeek has kept its certification current without carrying a full-time compliance function, and each engagement window has closed cleanly rather than trailing open items into the business. The three-year cycle is now complete, with recertification preparation as the natural next step in year four.</p></section>

                  <section className="mt-10 rounded-xl bg-slate-50 p-6 sm:p-8"><h3 className="text-xl font-bold text-primary">What PerchPeek Was Looking For</h3><ul className="mt-5 grid gap-3 text-sm leading-6 text-slate-700">{[
                    "ISO 27001 certification they could put in front of enterprise customers and prospects, not an internal exercise.",
                    "A short, predictable engagement window of roughly one to three months rather than a program running all year.",
                    "Independent technical validation of the web application in the same window as the certification work.",
                    "A partner who could return each cycle already knowing the environment, controls, and history.",
                  ].map((item) => <li key={item} className="flex gap-3"><CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-accent" aria-hidden="true" /><span>{item}</span></li>)}</ul></section>

                  <div className="mt-10 grid gap-8 border-t border-slate-200 pt-10 lg:grid-cols-2">
                    <section><h3 className="text-xl font-bold text-primary">The Challenge</h3><p className="mt-3 leading-7 text-slate-600">The difficulty was never whether ISO 27001 could be achieved. It was achieving it, and re-achieving it, inside a compressed window while the business kept running.</p><p className="mt-3 leading-7 text-slate-600">The certification readiness had to be completed in a one-to-three-month window each cycle. Control gaps, policy work, evidence collection, and auditor scheduling all had to land inside that same window, with no room to let items slip quietly into the next quarter.</p><p className="mt-3 leading-7 text-slate-600">The web application penetration test ran in parallel rather than after certification. Two workstreams, one governance and one technical, competed for the attention of the same small internal team at the same time.</p><p className="mt-3 leading-7 text-slate-600">Remediating the penetration test findings was the hardest part of the work. Technical findings needed engineering time, code and configuration changes, and then retesting to prove closure, all while the ISO 27001 evidence set was being finalized for the auditor.</p><p className="mt-3 leading-7 text-slate-600">PerchPeek had no dedicated in-house compliance function, so the program could not be left to run itself between engagement windows without drifting out of date.</p><p className="mt-3 leading-7 text-slate-600">Each annual cycle had to satisfy an external auditor, so every control claim needed evidence an assessor would accept, not simply an internal assurance that the control existed.</p></section>
                    <section><h3 className="text-xl font-bold text-primary">Com-Sec&apos;s Approach</h3><p className="mt-3 leading-7 text-slate-600">Com-Sec treated the time constraint as the design input rather than the obstacle and built a repeatable cycle around it.</p><p className="mt-3 leading-7 text-slate-600">Scoped to the window. Com-Sec worked backwards from the audit date, sequencing control work, policy updates, and evidence collection so the heaviest lifting happened early and the final weeks were confirmation rather than catch-up.</p><p className="mt-3 leading-7 text-slate-600">One team across governance and technical testing. The same Com-Sec team covered the ISO 27001 readiness and the web application penetration test. Technical findings were interpreted with the management system in view, and control gaps were interpreted with the platform in view, so the two tracks informed each other instead of running blind.</p><p className="mt-3 leading-7 text-slate-600">Parallel tracks, a single plan. Com-Sec ran the certification readiness and penetration test concurrently under a single plan, protecting the client team from two separate vendors, two sets of questions, and two competing schedules.</p><p className="mt-3 leading-7 text-slate-600">Controls reviewed line by line. Every cycle, Com-Sec reviewed the full control set with PerchPeek, confirmed each control was operating and evidenced, and prepared the package before the assessor asked for it.</p><p className="mt-3 leading-7 text-slate-600">Direct auditor engagement. Com-Sec met directly with Prescient Security each cycle, walked the controls with them, answered assessor questions, and resolved queries directly rather than through slow written exchanges.</p><p className="mt-3 leading-7 text-slate-600">Remediation owned, not just reported. Findings from the penetration test and annual review were triaged, prioritized, and remediated, with anything that could not be fully closed in the current window tracked and carried into the next cycle so it was resolved rather than forgotten.</p><p className="mt-3 leading-7 text-slate-600">Every cycle left a clean handover. Each window closed with the control set, evidence, and open findings documented, so the next cycle began from a known position instead of a cold restart, even after months with no active engagement.</p><p className="mt-3 leading-7 text-slate-600">Penetration testing available as an add-on. PerchPeek was able to add the penetration test to the existing engagement rather than running a separate procurement, onboarding a second vendor, and re-explaining the environment.</p></section>
                  </div>

                  <section className="mt-10 rounded-xl bg-slate-50 p-6 sm:p-8"><h3 className="text-xl font-bold text-primary">Results</h3><ul className="mt-5 grid gap-3 text-sm leading-6 text-slate-700 sm:grid-cols-2">{[
                    "ISO 27001 certification achieved in 2024 and maintained across the full three-year cycle, through the first surveillance audit in 2025 and the second in 2026.",
                    "Certification confirmed by the auditor, covering the three-year period.",
                    "Each annual readiness cycle completed inside the intended one-to-three-month window.",
                    "Web application penetration testing delivered in parallel with the certification work rather than as a separate later project.",
                    "Penetration test and review findings remediated, with open items carried forward and closed in the following cycle.",
                    "Control set, evidence, and open items documented at the close of each window, so no cycle started from scratch.",
                    "A three-year repeat client relationship, with the full certification cycle now complete and recertification preparation available when PerchPeek re-engages.",
                  ].map((result) => <li key={result} className="flex gap-3"><CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-accent" aria-hidden="true" /><span>{result}</span></li>)}</ul></section>

                  <section className="mt-10"><h3 className="text-xl font-bold text-primary">Why Com-Sec</h3><p className="mt-4 leading-7 text-slate-600">PerchPeek did not need one firm for the certification and a second firm with no context for the penetration test. Com-Sec covers both, and that is what made the compressed timeline workable.</p><p className="mt-4 leading-7 text-slate-600">Governance and technical security under one roof. Com-Sec works across SOC 2, ISO 27001, ISO 42001, HIPAA, GDPR, penetration testing, and IT support, so the same partner can answer the governance question and the technical one.</p><p className="mt-4 leading-7 text-slate-600">Engagement shaped around the client, not the vendor. Com-Sec scoped the work to the window PerchPeek actually wanted, one to three months a cycle, instead of pushing a permanent program the client had not asked for.</p><p className="mt-4 leading-7 text-slate-600">Continuity across cycles. Three cycles with the same team meant no re-onboarding, no rediscovery of the environment, and no loss of history on prior findings.</p><p className="mt-4 leading-7 text-slate-600">Auditor fluency. Com-Sec engaged the assessor directly, walked the control set with them, and kept the audit moving.</p><p className="mt-4 leading-7 text-slate-600">Accountable through remediation. Com-Sec stayed with findings through remediation and retesting instead of handing over a report and stepping away.</p></section>

                  <section className="mt-10 rounded-xl border border-orange-200 bg-orange-50 p-6"><p className="text-xs font-bold uppercase tracking-wider text-orange-700">Client Perspective</p><blockquote className="mt-3 text-lg font-medium leading-7 text-primary">&quot;Com-Sec helped us connect ISO 27001 with real technical validation. They understood the framework and the platform, which made the overall effort more coherent.&quot;</blockquote><p className="mt-4 text-sm font-semibold text-slate-600"><span className="block">Angella Vecchione</span><span className="block">Senior Business Operations Associate, PerchPeek</span></p></section>

                  <section className="mt-10 border-t border-slate-200 pt-10"><h3 className="text-xl font-bold text-primary">Keep certification and technical testing on the same track</h3><p className="mt-4 leading-7 text-slate-600">If your certification cycle and technical testing are moving on separate tracks, or if you need certification and surveillance work delivered inside a fixed window rather than across a full year, <Link to="/contact" className="font-semibold text-accent underline underline-offset-4 hover:text-primary">talk to Com-Sec</Link>.</p></section>

                </div>
              </div>
            </article>
            )}

            {selectedStudy.id === "vheda-health" && (
            <article className="mt-10 overflow-hidden rounded-[1.75rem] border border-slate-200/80 bg-white shadow-[0_24px_70px_-34px_rgba(15,23,42,0.5)]">
              <div className="grid lg:grid-cols-[0.9fr_2.1fr]">
                <aside className="relative overflow-hidden bg-gradient-to-br from-primary via-blue-950 to-slate-950 p-7 text-white sm:p-10 lg:p-12">
                  <h2 className="text-3xl font-bold">Vheda Health</h2>
                  <div className="mt-4 inline-flex rounded-full border border-orange-300/30 bg-orange-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-orange-200">HealthTech · Virtual Care</div>
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
